var phvalue = require('../models/phvalue');


module.exports = function(req,res){
	
	console.log("retrieve file");
	phvalue.find({},{},{},function(err,values){
            if(err)
                throw err;
            res.json(values);
    });
}