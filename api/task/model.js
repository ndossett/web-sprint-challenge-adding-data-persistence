// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
    get,
    create
}

function get(){
    return db("tasks as t")
    .leftJoin("projects as p", "p.id", "t.project_id",)
    .select(
        "t.id", "t.description", "t.notes", "t.completed", "p.name as project_name",
        "p.description as project_description"
    )
}
function create(task){
    return db("tasks").insert(task, "id")
        .then(([id]) => {
            return db("tasks").where("id", id).first();
        });
}