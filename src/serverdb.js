const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const router = require("./index.js");
const app = express();



    //Include the necessary extensions

//encode url
app.use(bodyparser.urlencoded({extended: true}));
app.use(router);


//connecting to mongoDB
mongoose.connect("mongodb+srv://stanfy79:pro123456@cluster0.nnapghi.mongodb.net/Informations", { useNewUrlParser: true }, { useUnifiedTopology: true });

// Create data Schema
const regSchema = {
    Towed: String,
    licencePlete: String,
    reason: String,
    note: String,
    attachtment: String
}
 
const Reg = mongoose.model("Details", regSchema);


//Send data to mongoDB
app.post("./", function(req, res) {
    let newReg = new Reg({
        Towed: req.body.towed,
        licencePlete: req.body.licencePlete,
        reason: req.body.reason,
        note: req.body.note,
        attachtment: req.body.attachtment
    });
    newReg.save();
    //Remain on thesame page after submition
    res.redirect("/");
})

// To listen on PORT 3000

app.listen(3000, function() {
    console.log("Listening on 3000");
});