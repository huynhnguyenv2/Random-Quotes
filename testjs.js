$(document).ready(function() {
  var at,aq;

  var picture = [
  'https://tinhte.cdnforo.com/store/2010/12/2889559_Nature-Full-HD-Wallpaper-national-geographic-7822272-1920-1080.jpg',
  'https://tinhte.cdnforo.com/store/2010/12/2889553_1920x1080-HD-wallpaper-39.jpg',
  'https://tinhte.cdnforo.com/store/2010/12/2889557_1920x1080_Dizorb_Lower_Falls_HD_Wallpaper.jpg',
  'https://tinhte.cdnforo.com/store/2010/12/2889551_forgotten_games_hd_widescreen_wallpapers_1920x1200.jpeg',
  'https://tinhte.cdnforo.com/store/2010/12/2889569_Jena_Paradies_by_hquer.jpg'
  ];

  $(".next").on("click", function() {
    getQuote();

  });
  $(".post").on("click", function() {
    aq = $('.quote').text();
    at = $('.author').text();
    window.open("https://twitter.com/intent/tweet?hashtags=randomQuotes related=aminukano&via=aminusufi&text=" +'"'  + aq + '" - ' + at);
  });
  function getQuote() {
    
    var url =
      "http://quotes.stormconsultancy.co.uk/random.json";

    $.ajax({
      type: "GET",
      url: url,
    
    
      success: function(a) {
        
        var rand = picture[Math.floor(Math.random() * picture.length)];
        var url1 = "url('" + rand + "')" ;
        $("#quote").text('"' + a.quote + '"');
        if (author) {
          $("#author").text("- " + a.author);
        } else {
          $("#author").text("- " + "A Wise Man");
        }
        $("body").css("background",url1);
      }
    });
  }

});
