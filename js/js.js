var todo_newTodo_post_ = document.getElementById("todo_newTodo_post_");
var todo_newTodo_text_ = document.getElementById("todo_newTodo_text_");
var todo_notAct = document.getElementById("notAct");

var todo_todos_list_ = document.getElementById("todo_todos_list_");
var todo_todos_clear_ = document.getElementById("todo_todos_clear_");
var todo_todos_markTodos_ = document.getElementById("todo_todos_markTodos_");
var todo_todos_deleteTodos_ = document.getElementById("todo_todos_deleteTodos_");


var listItem = `<li class="todo-listItem"><input type="checkbox" name="todo_todoCheck"> :name:</li>`;

todo_newTodo_post_.addEventListener("click", (event) => {
    event.preventDefault();
    todo_notAct.style["display"] = "none";
    if(todo_newTodo_text_.value === ""){
        todo_notAct.style["display"] = "initial";
        return;
    }
    var item = listItem.replace(":name:", todo_newTodo_text_.value);
    todo_newTodo_text_.value = "";
    todo_todos_list_.innerHTML += item;
});

todo_todos_clear_.addEventListener("click", (event) => {
    var checkboxes = document.getElementsByName("todo_todoCheck");
    for (var i in checkboxes){
        checkboxes[i].checked = false;
    }
});

todo_todos_markTodos_.addEventListener("click", (event) => {
    var checkboxes = document.getElementsByName("todo_todoCheck");
    for (var i in checkboxes){
        checkboxes[i].checked = true;
    }
});

todo_todos_deleteTodos_.addEventListener("click", (event) => {
    todo_todos_list_.innerHTML = "";
});