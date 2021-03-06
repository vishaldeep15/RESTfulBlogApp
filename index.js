var express     = require("express"),
	app         = express(),
	bodyParser  = require("body-parser"),
	mongoose    = require("mongoose");

//App config
mongoose.connect("mongodb://localhost/restful_blog_app", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Schema Setup
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose,model("Blog", blogSchema);

//RESTful Routes
//Index Route
app.get("/blogs",function(req, res){
	res.render("index");
});









//listening to local port 3000
app.listen(3000, function(){
	console.log("Blog App sever has started!");
});