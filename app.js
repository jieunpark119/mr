const express = require('express');

const app = express();

//routs
app.get('/',(req,res)=> {
	res.send('we are on home');
});

//how do we start listeing
app.listen(3000);
