const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

require('dotenv').config();
const app = express();

app.use(cookieParser());


app.use(cors({
    credentials:true, 
    origin:'http://localhost:3000'
}));
app.use(express.json(), express.urlencoded({extended : true}));
require("./config/mongoose.config");
require("./routes/user.routes")(app);

require("./routes/pirate.routes")(app);


const server = app.listen(8000, ()=>console.log( "Listening on port 8000"));


