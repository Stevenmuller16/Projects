

var todos = ["dasdadsa"];
var input = prompt("what would you like todo");



while(input !== "quit"){

    if(input === "list"){
        listTodos();
    } else if (input ==="new"){
        addTodo();
    } else if (input === "delete"){
        deleteTodo();
    }
    input = prompt("what would you like todo");
}

window.setTimeout(function() {





}, 500);

function listTodos(){

    console.log("***********");
    todos.forEach(function(items,i){
        console.log(i+": "+items); 
    })
    console.log("***********");

}

function addTodo(){
    var newtodo = prompt("enter your item");
        todos.push(newtodo);
}

function deleteTodo(){
    var indexToBe = prompt("index to be deletes");
        todos.splice(indexToBe, 1);
}

/*
var someObject = {
    friends:[
        {name:"malfoy"},
        {name:"crabbe"},
        {name:"goyle"}
    ],

    color : "baby blue",
    isEvil : true
};

var thigny = someObject.friends[0].name;
*/

