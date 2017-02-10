var Twitter = require('twitter');
var credentials = require('./credentials');
var client = new Twitter(credentials);

function favoriteUsersTweets() {
    client.get('statuses/user_timeline', {
        user_id: 162821844
    }, function(e, r) {
        for (var i = 0; i < r.length; i++) {
            client.post('favorites/create/', {
                id: r[i].id_str
            }, function(e, r) {
                console.log(r);
            });
        }
    });
}

setInterval(function() {
    favoriteUsersTweets();
}, 5 * 60 * 60000); //every five hours
