// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
    get,
    create
}

function get(){
    return db("resources")
}
function create(resource){
    return db("resources").insert(resource, "resource_id")
        .then(([id]) => {
            return db("resources").where("resource_id", id).first();
        });
}