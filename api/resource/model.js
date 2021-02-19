// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
    get,
    create
}

function get(){
    return db("resources")
    .then(([id]) => {
        return db("resources").where("id", id).first();
    });
}
function create(resource){
    return db("resources").insert(resource)
        .then(([id]) => {
            return db("resources").where("id", id).first();
        });
}