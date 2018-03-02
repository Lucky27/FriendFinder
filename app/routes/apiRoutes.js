var friendsData = require("../data/friendsData");

module.exports = function(app){

	app.get("/api/friendsData", function(req, res){
		var userData = req.body;
		var score = [];
		userData.added = true;
		res.json(userData)
	})

	app.post("/api/clear", function(){
		friendData = [];
	console.log(friendsData)
	})
}
