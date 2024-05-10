// Variables for the section, template, and button
const toDoItems = document.getElementById('todo');

const itemTemplate = document.getElementById('itemTemplate');
const addButton = document.getElementById('add');

//fetching item using local storage
let items = getItems();
function getItems() {
    const value = localStorage.getItem('todo') || "[]";

    return JSON.parse(value);

   
}

function setItems(items){
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo" , itemsJson);
}

function addItem(){
    items.unshift({
        description: "",
        completed: false
    });
    setItems(items);
    refreshList();
}

function refreshList(){
    
}

console.log(items);



