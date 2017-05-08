var mongoose = require('mongoose');
var schema = mongoose.Schema;

//schema for a pH value. Value and date added are the attributes.
var phvalueSchema = new schema({
	value:{type:Number},
    dateadded: {type:Date}
});

//module exports
module.exports = mongoose.model('phvalue', phvalueSchema);