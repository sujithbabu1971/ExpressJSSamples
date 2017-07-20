var exp = require("express");
var app = new exp();
var portNo = process.env.PORT || 4000;

app.listen(portNo, listenTo(portNo));
app.get("/data", (req,res)=>
{
	var str = "Method is "+"<br/>"+req.method;
	// Accessing the query object
	var query = req.query;
	//JSON is a global java script object. It is not from Node JS
	var queryString = JSON.stringify(query);
	// Accessing the name request param
	var name = query.name;
	str = str+"<br/>"+"name parameter value ="+name;
	str = str+"<br/>"+"whole query is ="+queryString;
	res.send(str);
	
});

app.get("/download", (req, res) =>
{
	res.download("254_git_installation_v2.0.pdf","kpn.pdf", (err) =>
	{
		if(err)
		{
			console.log("download error");
		}
		else
		{
			console.log("download suucessful");
		}
	}
	);
});

function listenTo(portNo) {

	console.log("Listeneing on "+portNo);

}