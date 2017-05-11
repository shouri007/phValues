var pg = require('pg');

module.exports = function(req,res){
	
	results = [];
	var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/values';
	var client = new pg.Client(connectionString);
	client.connect();
	var query = client.query('SELECT * FROM values');
	query.on('row', function(row){
		results.push(row);
	});
	query.on('end',function(){
		res.render('index',{'results' : results});
	});
}