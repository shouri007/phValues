var pg = require('pg');

module.exports = function(req,res){
	
	val = req.body.value;
	date_added = req.body.date_added;
	console.log("add file");
	var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/values';
	console.log(connectionString);
	var client = new pg.Client(connectionString);
	client.connect();
	var query = client.query('INSERT INTO values(value,date_added) VALUES ($1,$2)',[val,date_added]);
	query.on('end', function(){
		client.end();
	});    
    res.send("done");
}