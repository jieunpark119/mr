
var fs=require('fs');
var data=fs.readFileSync('mr.json');
var words=JSON.parse(data);
//console.log(words)

var express=require('express');
var app = express();
var server = app.listen(3000,listening);

function listening(){
	console.log('listening...')
}

app.use(express.static('website'));

// l and call back
app.get('/search/:Date',sendFlower);

function sendFlower(request,response){
	// var data = JSON.stringify(request.params);
	var data = request.params.Date;

	for(var i=0;i<words.length;i++){
		if(data == words[i].Date){
			response.send(words[i])
		}
	
	}
	
	// response.send("i love"+data+"flowers too")
}

app.get('/all',sendAll);

function sendAll(request,response){
	response.send(words);
}