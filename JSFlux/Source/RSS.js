$(document).ready(
    function(){

        $.ajax({
            type: "GET",
            url: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lesechos.fr%2Frss%2Frss_une_titres.xml",
            dataType: "jsonp",
            success: function(data) {
               console.log(data);
               var root = $('#rss')
               root.append('<div class="title"><strong>'+data.feed.title+'</strong></div>\n<div class="messages">');
               $.each(data.items,function(index,element){
                var date = new Date(element.pubDate);
                    $('.messages').append('<a href="'+element.link+'" class="message d-flex align-items-center"><div class="profile"><img src="'+element.enclosure.link+'" alt="..." class="img-fluid"></div><div class="content"> <strong class="d-block">'+element.title+'</strong><span class="d-block">'+element.description+'</span><small class="date d-block">'+ date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear()+'</small></div></a>')
               })

            }
        }
      );
    }
);