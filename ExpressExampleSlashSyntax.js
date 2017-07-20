// This program details the syntax for /data/name/age
// It is called positional parameters
var exp = require("express");
var app = new exp();
var portNo = process.env.PORT || 4000;

app.listen(portNo, listenTo(portNo));
// This folder is the one from the static files are served. 
// By default, the index.html is the index file
app.use(exp.static(__dirname+ "/public"));
// Instead of /data?name=sujith&age=45, it becomes /data/sujith/45
// It is positional parameters
// // Refer the API https://expressjs.com/en/4x/api.html#req.params
app.get("/data/:name/:age", (req,res)=>
{
	var str = "Method is "+"<br/>"+req.method;
	// Accessing the query object
	// This will be empty when the URL is /data/sujith/45
	var query = req.query;
	//JSON is a global java script object. It is not from Node JS
	var queryString = JSON.stringify(query);
	// Accessing the name request param
	var name = req.params.name;
	var age = req.params.age;
	// Refer express js API
	var firstParam = req.params[0];
	str = str+"<br/>"+"name parameter value ="+name;
	str = str+"<br/>"+"age parameter value ="+age;
	str = str+"<br/>"+"firstParam parameter value ="+firstParam;
	str = str+"<br/>"+"whole query is ="+queryString;
	res.send(str);
	
});
// Refer the API https://expressjs.com/en/4x/api.html#req.params
app.get("/data/:name/:age/*", (req,res)=>
{
	var str = "Method is "+"<br/>"+req.method;
	// Accessing the query object
	// This will be empty when the URL is /data/sujith/45
	var query = req.query;
	//JSON is a global java script object. It is not from Node JS
	var queryString = JSON.stringify(query);
	// Accessing the name request param
	var name = req.params.name;
	var age = req.params.age;
	// Refer express js API
	// If the URL is /data/sujith/45/mayao/kyao, the firstParam value would be mayao/kyao
	var firstParam = req.params[0];
	
	str = str+"<br/>"+"firstParam parameter value ="+firstParam;
	str = str+"<br/>"+"whole query is ="+queryString;
	res.send(str);
	
});



function listenTo(portNo) {

	console.log("Listeneing on "+portNo);

}