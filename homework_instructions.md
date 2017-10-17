

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'vF7yo2zuRCR67dB61ag99doWf',
  consumer_secret: 'nQNjcdhYnLCQ6gVmftYp75ehDQCC1ut2XwgCmCv3t4eJY3VOXd',
  access_token_key: ' 919322656427556864-OyEM4G9eID9C7TdhYRqthRk6QiMQrDM',
  access_token_secret: 'LVL2T7E5KHQxRYrJoX0Z1vf2ArIw363ZwCSla860C8iMU'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });