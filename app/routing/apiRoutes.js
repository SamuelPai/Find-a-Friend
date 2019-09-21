var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);

    })


    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        var userDatas = req.body;//what the user enters in
        console.log("User Data:", userDatas);
        var userScores = userDatas.scores;
        console.log("User Score:", userScores);
        var totalDifference; //diff between user score and scores in database

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;
            console.log(currentFriend.name);

            for (var x = 0; x < currentFriend.scores.length; x++) {
                var currentFriendScore = currentFriend.scores[x];
                var currentUserScore = userScores[x];

                totalDifference += Math.abs(parseInt(currentUserScore)-parseInt(currentFriendScore));
            }
            // If the sum of differences is less then the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {
                // Reset the bestMatch to be the new friend.
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            } 
        }
        // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
            // the database will always return that the user is the user's best friend).
            friends.push(userDatas);
            res.json(bestMatch);



    })
}