var apiKeys = require('./keys');
var Twitter = require('twitter');
var request = require('request');
var Spotify = require('node-spotify-api');
//console.log(apiKeys); 
var input = process.argv[2]; 



var client = new Twitter({
  consumer_key: apiKeys.twitterKeys.consumer_key,
  consumer_secret: apiKeys.twitterKeys.consumer_secret,
  access_token_key: apiKeys.twitterKeys.access_token_key,
  access_token_secret: apiKeys.twitterKeys.access_token_secret
});

var getTweets = function(){
  var params = {screen_name: 'TheDailyShow'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(!error){
      
      
      for(var i = 0; i < 10; i++ ) {
        
        console.log("--------------------------");
        console.log("Tweet");
        console.log(tweets[i].text, tweets[i].create_at);
        console.log("--------------------------");

      }
    }
    else{
      console.log(error);
    }
  });
}


// spotify -----------------------------------

var getSpotify = function() { 
  var spotify = new Spotify({
    id: apiKeys.spotifyKeys.client_ID,
    secret: apiKeys.spotifyKeys.client_secret
  });
 
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
        console.log("--------------------------");
        console.log("--------------------------");
        console.log("Artist: "+ data.tracks.items[0].artists[0].name)
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Preview Link" + data.tracks.items[0].href);
        console.log("album: " + data.tracks.items[0].album.name);
        console.log("--------------------------");
        console.log("--------------------------");
   
  });
}



// //omdb-------------------------------------------------
var request = require('request');

request('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); // 
  
    console.log("--------------------------");
    console.log("--------------------------");
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year Released: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors:  " + JSON.parse(body).Actors);
    console.log("--------------------------");
    console.log("--------------------------");

});
    
// still working on my switch and case function
// I also still need to add the hard code edge cases.

var choice = function() {
  switch (input) {
    case "my-tweets":
          // getTweets();
    break;
        
    case "spotify-this-song":
          getSpotify();
    break;

    case "movie-this":


  }
}
choice();