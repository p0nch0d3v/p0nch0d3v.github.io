'use strict';

$(document).ready(function(){
    const baseUrl = 'https://api.wunderground.com/api/',
        debug = true,
        requestTypes = {
            conditions: '/conditions/q/',
            astronomy: '/astronomy/q/',
            hourlyForecast: '/hourly/q/',
            dailyForecast: '/forecast/q/'
        },
        intervals = {
            conditions: {
                unit: 'minutes', 
                quantity: 10
            },
            astronomy: {
                unit: 'days', 
                quantity: 1
            },
            hourlyForecast: {
                unit: 'minutes', 
                quantity: 5 
            },
            dailyForecast: {
                unit: 'hours', 
                quantity: 1 
            }
        },
        keys = {
            lastUpdate: {
                conditions: 'last_conditions_update',
                astronomy: 'last_astronomy_update',
                hourlyForecast: 'last_hourly_forecast_update',
                dailyForecast: 'last_daily_forecast_update'
            },
            lastResponse: {
                conditions: 'last_conditions_response',
                astronomy: 'last_astronomy_response',
                hourlyForecast: 'last_hourly_forecast_response',
                dailyForecast: 'last_daily_forecast_response'
            },
            lastId: 'last_id',
            lastLocationLat: 'last_location_lat',
            lastLocationLon: 'last_location_lon',
			api_key: 'api_key'
        };

	window.app = {};
	window.app.api_key = localStorage.getItem(keys.api_key);

    bindEvents();

    startRefresh();

    refresh();    

    /* API CALLS */

    function getAllByQuery(queryText, force = false){
        getConditionsByQuery(queryText, force);
        getAstronomyByQuery(queryText, force);
        getHourlyForecastByQuery(queryText, force);
        getDailyForecastByQuery(queryText, force);
    }

    function getConditionsByQuery(queryText, force = false){
        getRequestByQuery(requestTypes.conditions, queryText, keys.lastResponse.conditions, keys.lastUpdate.conditions, processConditionsResponse, force);
    }

    function getAstronomyByQuery(queryText, force = false){
        getRequestByQuery(requestTypes.astronomy, queryText, keys.lastResponse.astronomy, keys.lastUpdate.astronomy, processAstronomyResponse, force);
    }

    function getHourlyForecastByQuery(queryText, force = false){
        getRequestByQuery(requestTypes.hourlyForecast, queryText, keys.lastResponse.hourlyForecast, keys.lastUpdate.hourlyForecast, processHourlyForecastResponse, force);
    }

    function getDailyForecastByQuery(queryText, force = false){
        getRequestByQuery(requestTypes.dailyForecast, queryText, keys.lastResponse.dailyForecast, keys.lastUpdate.dailyForecast, processDailyForecastResponse, force);
    }

    function isUpdateRequired(type, lastRequestUpdate){
        lastRequestUpdate = parseInt(lastRequestUpdate);
        consoleDebug('---------- isUpdateRequired ----------');
        consoleDebug(`type: ${type}`);
        consoleDebug(`lastRequestUpdate: ${lastRequestUpdate}`);
        
        var result = false,
            todayNow = new Date().getTime(),
            mNow = moment(todayNow),
            mLastRequestUpdate = moment(lastRequestUpdate);
        
        consoleDebug(`mNow: ${mNow}`);
        consoleDebug(`mLastRequestUpdate: ${mLastRequestUpdate}`);

        switch (type) {
            case requestTypes.conditions:
                var diff = moment.duration(mNow - mLastRequestUpdate).as(intervals.conditions.unit);
                consoleDebug(`quantity: ${intervals.conditions.quantity} unit: ${intervals.conditions.unit}`);
                consoleDebug(`diff: ${diff}`);
                result = (diff > intervals.conditions.quantity);
                break;
            case requestTypes.astronomy:
                var diff = moment.duration(mNow - mLastRequestUpdate).as(intervals.astronomy.unit);
                consoleDebug(`quantity: ${intervals.astronomy.quantity} unit: ${intervals.astronomy.unit}`);
                consoleDebug(`diff: ${diff}`);
                result = (diff > intervals.astronomy.quantity);
                break;
            case requestTypes.hourlyForecast:
                var diff = moment.duration(mNow - mLastRequestUpdate).as(intervals.hourlyForecast.unit);
                consoleDebug(`quantity: ${intervals.hourlyForecast.quantity} unit: ${intervals.hourlyForecast.unit}`);
                consoleDebug(`diff: ${diff}`);
                result = (diff > intervals.hourlyForecast.quantity);
                break;
            case requestTypes.dailyForecast:
                var diff = moment.duration(mNow - mLastRequestUpdate).as(intervals.dailyForecast.unit);
                consoleDebug(`quantity: ${intervals.dailyForecast.quantity} unit: ${intervals.dailyForecast.unit}`);
                consoleDebug(`diff: ${diff}`);
                result = (diff > intervals.dailyForecast.quantity);
                break;
            default:
                result = false;
                break;
        }
        consoleDebug(`isUpdateRequired: ${result}`);
        return result;
    }

    function getRequestByQuery(type, queryText, lastResponseKey, lastUpdateKey, processCallback, force = false){
        consoleDebug('---------- getRequestByQuery ----------');
        consoleDebug(`type: ${type}`);
        consoleDebug(`query: ${queryText}`);
        consoleDebug(`lastResponseKey: ${lastResponseKey}`);
        consoleDebug(`lastUpdateKey: ${lastUpdateKey}`);
        consoleDebug(`force: ${force}`);

        var getRequest = false;
        var lastRequestUpdate = localStorage.getItem(lastUpdateKey);
        
        if (!isNullOrEmpty(lastRequestUpdate)) {
            consoleDebug(`lastRequestUpdate: ${lastRequestUpdate}`);
            getRequest = isUpdateRequired(type, lastRequestUpdate);
        }
        else {
            getRequest = true;
        }

        var lastResponse = localStorage.getItem(lastResponseKey);
        
        if (getRequest == true || force == true || isNullOrEmpty(lastResponse)) {
            var url = `${baseUrl}${window.app.api_key}${type}${queryText}.json`;
            consoleDebug(`url: ${url}`);
            $.get({'url': url}).done(function(response){
                var lastUpdate = new Date().getTime();
                localStorage.setItem(lastUpdateKey, lastUpdate);

                processCallback(response);
            }).catch(function(error){
                console.log(error);
            });
        }
        else  if (getRequest == false && !isNullOrEmpty(lastResponse)) {
            var lastResponseObject = JSON.parse(lastResponse);
            processCallback(lastResponseObject);
        }
        else {
            consoleDebug('nothing to do')   ;
        }
    }

    function getAllByLocation(lat, lon, force = true){
        consoleDebug('---------- getAllByLocation ----------')
        consoleDebug(`lat: ${lat} lon: ${lon}`);
        localStorage.setItem(keys.lastLocationLat, lat);
        localStorage.setItem(keys.lastLocationLon, lon);
        var queryText = `${lat},${lon}`;
        getAllByQuery(queryText, force);
    }

    /* API RESPONSES */

    function processConditionsResponse(response) {
        if (response){
            localStorage.setItem(keys.lastResponse.conditions, JSON.stringify(response));
            if (response.response) {
                var r = response.response;
                if (r.error){
                    if (r.error.type && r.error.description){
                        alert(r.error.type + ' ' + r.error.description);
                    }
                }
                else if (r.results && r.results.length > 0) {
                    var resultSelect = $('select[name="results"]')
                    resultSelect.empty();
                    resultSelect.show();
                    resultSelect.siblings('.select2').show();
                    $('input[name="query_text"').hide();

                    for (let i = 0, t = r.results.length; i < t; i++) {
                        const e = r.results[i];
                        var optionText = e.city + ', ' + e.state + ', ' + e.country_name
                        var newOption = $('<option>').html(optionText);
                        newOption.attr('id', 'zmw:' + e.zmw);
                        resultSelect.append(newOption)
                    }
                    var newOption = $('<option>').html('Cancel');
                    newOption.attr('id', 'cancel');
                    resultSelect.append(newOption);
                    resultSelect.select2('open');
                    resultSelect.val(null).trigger('change');
                }
            }
            if (response.current_observation){
                var co = response.current_observation;
                $('.weather_location_name [name="location_name"]').text(co.observation_location.full)
                $('.weather_temp [name="tenperature"').text(co.temp_c);
                $('.weather_temp [name="tenperature_feel"').text(co.feelslike_c);
                $('.weather_status [name="status_main"').text(co.weather);
                $('.weather_icon [name="icon"]').attr('src', co.icon_url);
                $('.weather_uv [name="uv_index"]').text(co.UV);
                $('.weather_humidity [name="humidity"').text(co.relative_humidity);
                
                var windKmHr = co.wind_kph;
                windKmHr = fixFloatTo(windKmHr, 1);
                var windText = '';
                if (windKmHr != 0.0)  {
                    windText = windKmHr.toString() + " Km/h";
                    windText += ' ' + getCardinalDirectionFromDegree(co.wind_degrees); 
                }
                else {
                    windText = 'Calm';
                }
                $('.weather_wind [name="wind"]').text(windText);
            }
        }
    }

    function processAstronomyResponse(response){
        if (response){
            localStorage.setItem(keys.lastResponse.astronomy, JSON.stringify(response));
            if (response.response) {
                var r = response.response;
                if (r.error){
                    if (r.error.type && r.error.description){
                        alert(r.error.type + ' ' + r.error.description);
                    }
                }
            }
            if (response.sun_phase){
                var sp = response.sun_phase,
                    sunrise_hour = parseInt(sp.sunrise.hour),
                    sunrise_minute = parseInt(sp.sunrise.minute),
                    sunset_hour = parseInt(sp.sunset.hour),
                    sunset_minute = parseInt(sp.sunset.minute),
                    sunriseText = (sunrise_hour < 10 ? `0${sunrise_hour}` : sunrise_hour) + ':' + (sunrise_minute < 10 ? `0${sunrise_minute}` : sp.sunrise.minute),
                    sunsetText = (sunset_hour < 10 ? `0${sunset_hour}` : sunset_hour) + ':' + (sunset_minute < 10 ? `0${sunset_minute}` : sp.sunset.minute);

                $('.weather_time [name="sunrise"]').text(sunriseText);
                $('.weather_time [name="sunset"]').text(sunsetText);

                var momentNow = moment(),
                    momentSunrise = moment(`${momentNow.format('YYYY-MM-DD')} ${sunriseText}`),
                    momentSunset = moment(`${momentNow.format('YYYY-MM-DD')} ${sunsetText}`),
                    daylight = moment.duration(momentSunset - momentSunrise),
                    daylightString = `${daylight.hours()}:${daylight.minutes()}`;
                    
                $('.weather_time [name="daylight"]').text(daylightString);

                if (momentNow > momentSunrise && momentNow < momentSunset) {
                    $('.main_weather').addClass('day');
                }
                else {
                    $('.main_weather').removeClass('day');
                }

                if (momentNow < momentSunrise || momentNow > momentSunset) {
                    $('.main_weather').addClass('night');
                }
                else{
                    $('.main_weather').removeClass('night');
                }
            }

            if (response.moon_phase){
                var mp = response.moon_phase;
                $('.weather_moon [name="moon"]').text(`${mp.percentIlluminated}% ${mp.phaseofMoon}`)
            }
        }
    }

    function processHourlyForecastResponse(response){
        if (response) {
            localStorage.setItem(keys.lastResponse.hourlyForecast, JSON.stringify(response));

            if (response.hourly_forecast && response.hourly_forecast.length > 0){
                var hf = response.hourly_forecast;
                var template  = $('template[id="forecast_hour"]');
                for (let i = 0; i < 3; i++) {
                    const e = hf[i];
                    var element = $(`.forecast_hour[name="hour_${i + 1}"]`);
                    element.html(template.html());

                    element.find('img[name="icon"]').attr('src', e.icon_url);
                    element.find('[name="time"]').text(`${e.FCTTIME.hour}:${e.FCTTIME.min}`);
                    element.find('[name="status"]').text(e.condition);
                    element.find('[name="tenperature"]').text(e.temp.metric);
                    element.find('[name="tenperature_feel"]').text(e.feelslike.metric);
                    element.find('[name="humidity"]').text(e.humidity);
                    element.find('[name="uv"]').text(e.uvi);
                }
                var lastResponseTime = new Date(parseInt(hf[0].FCTTIME.epoch) * 1000).getTime();
                localStorage.setItem(keys.lastUpdate.hourlyForecast, lastResponseTime)
            }
        }
    }

    function processDailyForecastResponse(response){
        if (response) {
            localStorage.setItem(keys.lastResponse.dailyForecast, JSON.stringify(response));

            if (response.forecast && response.forecast.simpleforecast && response.forecast.simpleforecast.forecastday && response.forecast.simpleforecast.forecastday.length > 0) {
                var sf = response.forecast.simpleforecast.forecastday;
                var template  = $('template[id="forecast_day"]');
                for (let i = 0; i < 3; i++) {
                    const f = sf[i];
                    var element = $(`.forecast_day[name="day_${i + 1}"]`);
                    element.html(template.html());
                    element.find('[name="icon"]').attr('src', f.icon_url);
                    element.find('[name="date"]').text(`${f.date.monthname} ${f.date.day} ${f.date.year}`);
                    element.find('[name="status"]').text(f.conditions);
                    element.find('[name="temperature_min"]').text(f.low.celsius);
                    element.find('[name="temperature_max"]').text(f.high.celsius);
                }
            }
        }
    }

    /* HELPERS */

    function bindEvents(){
        $('[name="search_name"]').off('click').on('click', function(e) {
            // localStorage.removeItem('last')
            var queryText = $('[name="query_text"').val();
            getConditionsByQuery(queryText, true);
            localStorage.setItem('last_query', queryText);
        });
    
        $('[name="search_geolocation"]').off('click').on('click', function(e) {
            getLocation(function(lat, lon){
                getAllByLocation(lat, lon, true);
            });
        });
    
        $('[name="refresh"]').off('click').on('click', function(e) {
            var lastId = localStorage.getItem(keys.lastId);
            var lastQuery = localStorage.getItem('last_query');
            var lastLocationLat = localStorage.getItem(keys.lastLocationLat);
            var lastLocationLon = localStorage.getItem(keys.lastLocationLon);

            if (!isNullOrEmpty(lastId)) {
                getAllByQuery(lastId);
            }
            else if (!isNullOrEmpty(lastLocationLat) && !isNullOrEmpty(lastLocationLon)) {
                getAllByLocation(lastLocationLat, lastLocationLon);
            }
            else if (!isNullOrEmpty(lastQuery)) {
                
            }
            showLastUpdate();
        });
        
		var modalElement = $('#config_modal');

        $('[name="config"]').off('click').on('click', function(e) {
			var currentApiKey = localStorage.getItem(keys.api_key);

			modalElement.find('#config_api_key').val(currentApiKey);
            modalElement.modal({ keyboard: false });
            modalElement.modal('show');
        });

		modalElement.find('[name="save_config"]').off('click').on('click', function(e){
			var newApiKey = modalElement.find('#config_api_key').val();
            localStorage.setItem(keys.api_key, newApiKey);
			modalElement.modal('hide');
			window.app.api_key = localStorage.getItem(keys.api_key);
		});


        var resultSelect = $('select[name="results"]');
        resultSelect.select2({placeholder: 'Select an option'});
        resultSelect.hide();
        resultSelect.siblings('.select2').hide();
        resultSelect.off('select2:select').on('select2:select', function (e) {
            var id = (e && e.params && e.params.data && e.params.data.element) ? e.params.data.element.id : '';

            if (id !== 'cancel') {
                localStorage.setItem(keys.lastId, id);
                resultSelect.hide();
                resultSelect.siblings('.select2').hide();
                $('input[name="query_text"').show();
                getAllByQuery(id, true);
            }
        });
    }

    function showLastUpdate(){
        var lastUpdate = localStorage.getItem(keys.lastUpdate.conditions);
        lastUpdate = new Date(parseInt(lastUpdate));
        
        var span = moment(lastUpdate).fromNow();
        var text = lastUpdate.toLocaleString() + ' ( ' + span + ' )';
        
        $('[name="last_update"]').text(text);
    }

    function getLocation(callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) { 
                    callback(position.coords.latitude, position.coords.longitude); 
                }, function(error){
                    console.log(error);
                },{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
                );
        } else { 
            alert('Geolocation is not supported by this browser.');
        }
    }
    
    function getCardinalDirectionFromDegree(degree){
        var degreeAndCardinal = [];
        
        degreeAndCardinal.push({min:348.75,	max:360, dir: 'North'});
        degreeAndCardinal.push({min:0,	max:11.25, dir: 'North'});
        degreeAndCardinal.push({min:11.25,	max:33.75, dir: 'North NE'});
        
        degreeAndCardinal.push({min:33.75,	max:56.25, dir: 'North East'});
        degreeAndCardinal.push({min:56.25,	max:78.75, dir: 'East NE'});
        degreeAndCardinal.push({min:78.75,	max:101.25, dir: 'East'});
        degreeAndCardinal.push({min:101.25,	max:123.75, dir: 'East SE'});
        
        degreeAndCardinal.push({min:123.75,	max:146.25, dir: 'South East'});
        degreeAndCardinal.push({min:146.25,	max:168.75, dir: 'South SE'});
        degreeAndCardinal.push({min:168.75,	max:191.25, dir: 'South'});
        degreeAndCardinal.push({min:191.25,	max:213.75, dir: 'South SW'});
        
        degreeAndCardinal.push({min:213.75,	max:236.25, dir: 'South West'});
        degreeAndCardinal.push({min:236.25,	max:258.75, dir: 'West SW'});
        degreeAndCardinal.push({min:258.75,	max:281.25, dir: 'West'});
        degreeAndCardinal.push({min:281.25,	max:303.75, dir: 'West NW'});
        
        degreeAndCardinal.push({min:303.75,	max:326.25, dir: 'North West'});
        degreeAndCardinal.push({min:326.25,	max:348.75, dir: 'North NW'});
        
        for (let i = 0, t = degreeAndCardinal.length; i < t; i++) {
            if (degree >= degreeAndCardinal[i].min && degree <= degreeAndCardinal[i].max) {
                return degreeAndCardinal[i].dir;
            }
        } 
        return degree.toString();
    }

    function fixFloatTo(number, fraction){
        return parseFloat(Math.round(number * 100) / 100).toFixed(fraction);
    }

    function isNullOrEmpty(value){
        return typeof(value) === 'undefined' || value === null || value.trim().length === 0 || value.trim() === '';
    }

    function consoleDebug(message){
        if (debug === true) {
            console.debug(message);
        }
    }

    function refresh(){
        consoleDebug('---------- refresh ----------');
        var momentNow = moment();
        consoleDebug(`${momentNow.format('YYYY-MM-DD')} ${momentNow.format('HH:mm:ss')}`);
        $('[name="refresh"]').trigger('click');
    }

    function startRefresh(){
        setInterval(function(){
            refresh();            
        }, 1 * 60 * 1000);
    }
});
