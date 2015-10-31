function RandomInit(){

}

RandomInit.prototype.quote = function(){
  (function() {
    var array_of_content = [];
    var array_of_quotes = [];
    //usefull to test against a jsonp end point
    //$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?")
    //$.getJSON("http://localhost:3000/api/v1/episodes")
    //$.getJSON("http://localhost:3000/api/v1/episodes.jsonp?callback=parseEpisodes")
    $.getJSON("https://koshspeaks.herokuapp.com/api/v1/episodes")
    //$.getJSON("https://koshspeaks.herokuapp.com/api/v1/episodes.jsonp?callback=parseEpisodes")
        .done(function (json) {

          //TODO this code should resemble forismatic....should only be json.getContent
          //console.dir('json: '+json.episodes[0].quotes[0].content);
          //TODO get total number of quotes to feed back to a randomizer
          //TODO note: rand(a..b)
          //iterate epsiodes then quotes in eps?
          //console.dir(json.episodes.length);
          //TODO for each episode funnel each quote into an array

          json.episodes.forEach(function(item){
            array_of_content.push(item.quotes);
          });

          b = array_of_content.length;
          i = Math.floor(Math.random()*b)+1;
          console.dir("array size "+b);
          console.dir("random "+i);
          console.dir(array_of_content[i]);
          RandomInit.prototype.getComment(array_of_content[i]);

          //TODO how to return value from here?

        })
        .fail(function(jqxhr,textStatus,error,json){
          console.log('json: '+json);
          var err = textStatus +','+error;
          console.log('Stuff got broke: '+ err);
        });
  })();
};

RandomInit.prototype.getComment = function(array){
  console.log(array instanceof Array);
  b = array.length;
  ii = Math.floor(Math.random()*b)+0;
  console.dir("array2 size "+b);
  console.dir("random2 "+ii);
  console.dir(array);
  console.dir(array[ii]);
  document.getElementById("quote").innerHTML = array[ii].content;
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

