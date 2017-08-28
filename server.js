var mysql=require('mysql');
var connection=mysql.createConnection({
 
host:'localhost',
 user:'root',
 password:'wipro@123',
 database:'Simplivity'
 
});

function loadData(res) {
    
    connection.connect(function(err) {
	  if (err) throw err;
	  connection.query("SELECT * FROM Test_DB", function (err, result, fields) {
		if (err) throw err;
		res.send(result);
	  });
	});
}

var express = require('express');
var app = express(); 

app.get('/',function(req, res) { 
loadData(res);
});

app.listen(3000, function(){
	console.log("server started....");
});