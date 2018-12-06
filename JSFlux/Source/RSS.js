$(document).ready(
    function(){

        $.ajax({
            crossDomain: true,
            type: "PUT",
            contentType : "application/x-www-form-urlencoded",
            url: "http://www.48info.fr/rss.php",
            data : {categorie:1},
            success: function(xml) {
                $(xml).find('channel').each(function(){
                    console.log(xml);
                })
            }
        }
      );
    }
);
 /*var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET","https://www.lesechos.fr/rss/rss_une_titres.xml", true);
  xhttp.send();*/
