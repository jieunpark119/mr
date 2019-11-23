const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	Date:String,
	Retrograde:String,
	Degree:String
});

module.exports =mongoose.model('Posts',PostSchema);