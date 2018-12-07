$(document).ready(
    function(){

        $.ajax({
            type: "GET",
            url: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lesechos.fr%2Frss%2Frss_une_titres.xml",
            dataType: "jsonp",
            success: function(data) {
               console.log(data);
            }
        }
      );
    }
);