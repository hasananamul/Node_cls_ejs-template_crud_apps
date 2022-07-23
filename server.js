const dotenv = require("dotenv").config();
const express = require("express");
const apps = express();
const colors = require("colors");
const path = require("path");
const express_layout = require("express-ejs-layouts");
const connectDB = require("./config/connection");
const {urlencoded} = require("express");


//Database connection initiate
connectDB()


//Environment init
const PORT = process.env.SERVER_PORT || 5050;

//EJS setup
apps.set("view engine", "ejs");

// Change defaults root directory
apps.set('layout', path.join(__dirname , 'layouts/app'));

//Allow to recived body data
apps.use(express.json());
apps.use(urlencoded({extended : false}));

//EJS layout setup
apps.use(express_layout);

//Use static folder
apps.use(express.static(path.join(__dirname , "/public")));
apps.use("/assets", express.static(path.join(__dirname , "/assets")) )
apps.use("/upload", express.static(path.join(__dirname , "/upload")) );

//student routing
apps.use("/student", require("./routes/studentsRouts"));


//EJS routing 
// apps.get("/", (req, res) => {
//       res.render("home")
// })

// apps.get("/about", (req, res) => {
//       res.render("about",{
//             title : "This is about page title from EJS",
//             text : "This is normal text from EJS  ",
//             error : {status : false, message : "This is an error"}
//       })
// })

// apps.get("/service", (req, res) => {
//       res.render("service")
// })

// apps.get("/team", (req, res) => {
//       res.render("team")
// })

// -------------------------

//Default Routing
// apps.get("/", ((req, res) => {
//       res.sendFile("/public/index.html")
// }))

// apps.get("/about", ((req, res) => {
//       res.sendFile("/public/about.html", {root : __dirname})
// }))

// apps.get("/service", ((req, res) => {
//       res.sendFile("/public/service.html", {root : __dirname})
// }))
// apps.get("/team", ((req, res) => {
//       res.sendFile("/public/team.html", {root : __dirname})
// }))

//Server creation
apps.listen(PORT, () => {console.log(`This server is runing on ${PORT} port`.america)});
