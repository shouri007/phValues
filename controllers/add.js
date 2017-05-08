var phvalue = require('../models/phvalue');

module.exports = function(req,res){
	console.log("add file");
	var newValue = new phvalue({
		value : req.body.value,
		dateadded : req.body.dateadded
    });    
    newValue.save();
    res.send("done");
}