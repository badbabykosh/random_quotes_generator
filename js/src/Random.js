function RandomInit(){

}

RandomInit.prototype.quote = function(){
  (function() {
    //usefull to test agains a jsonp end point
    //$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?")
    $.getJSON("http://localhost:3000/api/v1/episodes")
    //$.getJSON("http://localhost:3000/api/v1/episodes.jsonp?callback=parseEpisodes")
    //$.getJSON("https://koshspeaks.herokuapp.com/api/v1/episodes.jsonp?callback=parseEpisodes")
        .done(function (json) {
          //TODO this code should resemble forismatic....should only be json.getContent
          console.dir('json: '+json.episodes[0].quotes[0].content);
          document.getElementById("quote").innerHTML = json.episodes[0].quotes[0].content
          //TODO how to return value from here?
          //return json.quoteText;
        })
        .fail(function(jqxhr,textStatus,error,json){
          console.log('json: '+json);
          var err = textStatus +','+error;
          console.log('Shiz got broke: '+ err);
        });
  })();
};

RandomInit.prototype.randomBackground = function(){
  (function(){
    var images = [
      //'http://i.imgur.com/n35hLd0.jpg',
      'http://i.imgur.com/eNDW9ZV.jpg',
      'http://i.imgur.com/n0IY1gz.jpg'
    ];
    $('body').css({'background-image':'url('+images[Math.floor(Math.random()*images.length)]+')'});
    //TODO return it
  })();
};

