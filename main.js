var todos  =[];
function Todo(name){
    this.name =name;
    this.completed= true;

}

//add new todo
function addNewTodoWithName(name){
    var t=new Todo(name);
    todos.push(t);
    saveTodos();
}


//Remove Todo
function removeTodoAtIndex(index){
    todo.splice(index,1);
saveTodos();
}


//get todo
function getTodoAtIndex(index){
    return todos [index];

}
//save data to local storaGE
function saveTodos(){
    var str=JSON.stringify(todos);
    localStorage.setItem("todos",str);
}
//get data from local stroge
function getTodos(){
    var str=localStorage.getItem("todos");
    todos=JSON.parse(str);
    if(!todos){
        todos=[];
    }
}
getTodos();
//list todos
function listTodos(){
    console.log("hi");
    var html="";
    for (var i in todos){
        var todo=todos[i];
        var name =todo.name;
        var completed=todo.completed;
        html +="<li>"+name+"<span> " +completed+"</span></li>";
    }
    $("#list-todos").html(html);
}


// addNewTodoWithName("eate");
// addNewTodoWithName("do you eat to daday");
// listTodos();
// console.log("eeeee");
// removeTodoAtIndex(1);
// listTodos();
$("#add-todo-form").submit(function(event){
    console.log()
    event.preventDefault();
var name = $("#todo-name").val();
    addNewTodoWithName(name);
    listTodos();
});
// console.log(listTodos());

//js object
// var obj={name:"joe", age:44};