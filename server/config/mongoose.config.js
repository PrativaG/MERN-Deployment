const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pirateCrews", {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : true
})
    .then(()=> console.log("Successfully connected to database! "))
    .catch(() => console.log("Cannot connect to databse! Sorry!"))