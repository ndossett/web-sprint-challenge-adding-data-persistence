// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
    get,
    create
}

function get(){
    return db("projects")
}
function create(project){
    return db("projects").insert(project)
        .then(([id]) => {
            return db("projects").where("id", id).first();
        });
}