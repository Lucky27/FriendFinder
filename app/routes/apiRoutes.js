var friendsData = require("../data/friendsData");

module.exports = function(app){

	app.get("/api/friends", function(reg, res){
		res.json(friendsData);
	});

	app.get("/api/friends", function(req, res){
		var userData = req.body;
		var score = [];
		userData.added = true;
		res.json(userData)
	})

	app.post("/api/clear", function(){
		friendsData = [];
	console.log(friendsData)
	})
}
