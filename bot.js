var Twitter = require('twitter');
var credentials = require('./credentials');
var client = new Twitter(credentials);

var statuses = ['awsome', 'cool', 'keep up the awsome content']; //make sure you have many more responses
var replyCurrentNum = 0

function favoriteUsersTweets() {
    client.get('statuses/user_timeline', {
        screen_name: "the_kaseys"
    }, function(e, r) {
        console.log('we here');
        for (var i = 0; i < r.length; i++) {
            client.post('statuses/update', {
                status: statuses[replyCurrentNum],
                in_reply_to_status_id: r[i].id_str
            }, function(e, r) {
                replyCurrentNum += 1;
                console.log(r);
            });
        }
    });
}
favoriteUsersTweets();
setInterval(function() {
    favoriteUsersTweets();
}, 5 * 60 * 60000); //every five hours
