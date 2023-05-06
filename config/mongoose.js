const mongoose = require('mongoose');
const env=require("./environment");
//Set up default mongoose connection
var mongoDB =`${env.db}` ;
module.exports= mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connected to Database::mongoDB'));

