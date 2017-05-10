var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/values';
var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE values(id SERIAL PRIMARY KEY, value NUMERIC(5,2) not null, date_added TIMESTAMP)');
query.on('end', function(){
	client.end();
});
