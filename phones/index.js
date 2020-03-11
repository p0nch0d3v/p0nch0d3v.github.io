(function(){
    $(document).ready(function(){
        let siteList = [
            '-',
            'https://duckduckgo.com/?q={{number}}',
            'https://www.google.com.mx/search?q={{number}}',
            'https://mx.search.yahoo.com/search?p={{number}}',
            'https://www.bing.com/search?q={{number}}',
            'https://twitter.com/search?q={{number}}',
            'https://mx.answers.search.yahoo.com/search?p={{number}}',
            '-',
            'https://www.telefonospam.com.mx/{{number}}',
            'https://www.listaspam.com/busca.php?Telefono={{number}}',
            'http://www.quienhabla.mx/{{number}}',
            'https://quetelefono.com/{{number}}',
            'https://mx.shouldianswer.net/numero-de-telefono/{{number}}',
            'http://datostelefonicos.com/info/52{{number}}',
            'https://www.cleverdialer.mx/numero/{{number}}',
            'https://www.tellows.mx/num/{{number}}',
            'http://www.miraquienhabla.com.mx/{{number}}',
            'https://www.telguarder.com/mx/numero/{{number}}',
            'https://www.numerosdetelefono.mx/numero/{{number}}',
            'https://www.quienhallamado.es/{{number}}',
            'https://quienllama.org/mexico/telefonos/telefono-{{number}}',
            'https://www.telspy.org/phonenumber/{{number}}?lang=es',
            'https://www.showcaller.mx/{{number}}',
            'https://www.showcaller.global/mx/+52{{number}}',
            'https://www.everycaller.com/phone-number/52-{{number}}/',
            'https://www.quien-llama.cl/numero/{{number}}',
            '-',
            'https://es.spamphonebook.com/{{number}}',
            'https://mx.informacion-numero.com/numero/{{number}}',
            'https://www.numerostelefono.com/mx/?s={{number}}',
            'http://mx.whocalledme.net/PhoneNumber/{{number}}',
            'https://base.ly/mx/01{{number}}',
            'http://slick.ly/mx/{{number}}',
            'https://mean.ly/mx/01{{number}}',
            'https://www.planetamexico.com.mx/mexico/{{number}}',
            '-'
        ];

        let template = $('#source_template');
        
        for (let i = 0; i < siteList.length; i++) {
            if (siteList[i] === '-') {
                $('#source_list').append('<hr />')
            }
            else {
                let template_html = template.html();
                let source_id = ('source_' + (i + 1));
                
                template_html = template_html.replace(/(source_id)/mg, source_id);
                template_html = template_html.replace('source_text', siteList[i]);
                template_html = template_html.replace(/{{number}}/mg, '');
                template_html = template_html.replace('source_url', siteList[i]);
                
                $('#source_list').append(template_html);
            }
        }

        $('#select_all_sources').off('change').on('change', function(){
            if ($('#select_all_sources').is(':checked') === true) {
                $('#source_list input[type="checkbox"]').prop('checked', true);
            }
            else {
                $('#source_list input[type="checkbox"]').prop('checked', false);
            }
        });

        $('#btnGo').off('click').on('click', function(){
            let number = $("#number").val();
            let siteList = $('#source_list input[type="checkbox"]:checked[value]');
            for (let i = 0; i < siteList.length; i++) {
                setTimeout(function(){ 
                    let url = $(siteList[i]).val().replace('{{number}}', number);
                    window.open(url, '_blank');
                }, 250);
            }
        });

        $("#number").off('keyup').on('keyup', function(e){
            if ( e.which == 13 ) {
                   e.preventDefault();
                $('#btnGo').click();
              }
            window.location.hash = "#" + $("#number").val();
        });

        if(window.location.hash.length > 0){
            $("#number").val(window.location.hash.replace("#", ""));
        }
    });
})();
