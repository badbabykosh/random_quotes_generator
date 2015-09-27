requirejs.config({
  baseUrl:"js/lib",
  paths: {
    jquery: [
      '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery',
      //If the CDN location fails, load from this location
      'jquery/jquery-2.1.4'
    ],
    bootstrap: [
      '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',
      //If the CDN location fails, load from this location
      'bootstrap-335/js/bootstrap'
    ],
    //mah custom js files
    randomJs: '../src/Random',
      // cause require says so
    app: '../app'

  }
});
// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);