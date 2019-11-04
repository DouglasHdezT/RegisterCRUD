const Mongoose = require("mongoose");

let database = "RegisterDB";
let port = "27017";
let host = "localhost";
let uri = `mongodb://${host}:${port}/${database}`

const connect = ()=>{
    Mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log(`Conection to ${database} successfully`);
    })
    .catch(()=>{
        console.log(`An error happened trying to connect ${database} database`);
    });;

    Mongoose.Promise = global.Promise;
}



module.exports = {
    connect,
};