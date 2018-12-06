/*$(document).ready(
    function(){

        $.ajax({
            crossdomain: false,
            type: "GET",
            url: "https://www.francetvinfo.fr/france.rss",
            dataType: "xml",
            success: function(xml) {
                $(xml).find('channel').each(function(){
                    console.log(xml);
                })
            }
        }
      );
    }
);*/
 /*var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET","https://www.lesechos.fr/rss/rss_une_titres.xml", true);
  xhttp.send();*/
$(document).ready(function() {
    //feed to parse
    var feed = "https://www.francetvinfo.fr/france.rss";
    
    $.ajax(feed, {
        accepts:{
            xml:"application/rss+xml"
        },
        crossdomain: true,
        headers: {  'Access-Control-Allow-Origin': '*' },
        dataType:"xml",
        success:function(data) {
            //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

            $(data).find("item").each(function () { // or "item" or whatever suits your feed
                var el = $(this);
                console.log("------------------------");
                console.log("title      : " + el.find("title").text());
                console.log("link       : " + el.find("link").text());
                console.log("description: " + el.find("description").text());
            });
    

        }   
    });
    
});