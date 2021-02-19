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
    return db("projects").insert(project, "project_id")
        .then(([id]) => {
            return db("projects").where("project_id", id).first();
        })
}