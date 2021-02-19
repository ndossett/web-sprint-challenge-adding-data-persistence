// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
    get,
    create
}

function get(){
    return db("tasks")
}
function create(task){
    return db("tasks").insert(task)
        .then(([id]) => {
            return db("tasks").where("id", id).first();
        });
}