(function(){
    let startClock = function(){
        let interval = 1;
        $('.clock .hour').text(moment().format("HH"));
        $('.clock .minute').text(moment().format("mm"));
        setInterval(() => {
            $('.clock .hour').text(moment().format("HH"));
            $('.clock .minute').text(moment().format("mm"));
            if (interval === 1){
                $('.clock .pulse').removeClass('black');
            }
            else if (interval === -1){
                $('.clock .pulse').addClass('black');
            }
            interval *= -1;
        }, 1000);
    }
    $(document).ready(function(){
        let clearButtons = function(button){
            $('button#clock, button#stopwatch, button#timer, button#pomodoro').addClass('btn-secondary').removeClass('btn-primary');
            $(button).removeClass('btn-secondary');
            $(button).addClass('btn-primary');
        }

        $("button#clock").off('click').on('click', function(){
            clearButtons(this);
            startClock();
        });

        $("button#stopwatch").off('click').on('click', function(){
            clearButtons(this);
            $(this).addClass('btn-primary')
        });

        $("button#timer").off('click').on('click', function(){
            clearButtons(this);
            $(this).addClass('btn-primary')
        });

        $("button#pomodoro").off('click').on('click', function(){
            clearButtons(this);
            $(this).addClass('btn-primary')
        });
        
        // default
        $("button#stopwatch").click();
    });
})();