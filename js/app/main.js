// AMD module pattern
define(['jquery','randomJs'], function($){

  $(document).ready(function(){
    document.getElementById("quote").innerHTML = 'Welcome, click my quote button...';
    document.getElementById('clickme').addEventListener('click',getQuote);

    var random = new RandomInit();

    function getQuote(){
      random.quote();
    }
    // uncomment to start random quotes per 7 secs
    // setInterval( getQuote ,7000);

    random.randomBackground();


    $('#tweetLink').click(function () {

      var quoteText = $('#quote').text();

      var quoteStr = quoteText.toString();

      var quoteLen = quoteText.length;

      // This section formats the text that is too long, remove it if needed
      if (quoteLen > 101) { // max chacters allowed
        // trim, and allow space for '...'"
        var trimQuote = quoteStr.substring(0, 100);
        var trimQuote = trimQuote.trim(); //<-- ensures the last character isnt ' '
        quoteStr = trimQuote + "...";
      }

      // Update the link
      var linkRef = "http://twitter.com/share?text=" + quoteStr + "&hashtags=koshlives";

      $('#tweetLink').attr('href', linkRef);

    });
  });
});