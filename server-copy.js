const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//import routes
const postsRoute= require('./routes/posts');

app.use('/posts', postsRoute);

//routs
app.get('/',(req,res)=> {
	res.send('we are on home');
});



//connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },
	()=> console.log('connected to mongoose')

	);


//how do we start listeing
app.listen(3000);

}