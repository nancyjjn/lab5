var data = require("../data.json");

exports.addFriend = function(req, res) { 
	var newFriend = {
		'imageURL': "http://lorempixel.com/400/400/people",
		'name': req.query.name,
		'description': req.query.description
	}   
	console.log(data);
	data["friends"].push(newFriend);
	res.render('add', data);
 }