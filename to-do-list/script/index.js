// Variables for the section, template, and button
const toDoItems = document.getElementById('todo');

const itemTemplate = document.getElementById('itemTemplate');
const addButton = document.getElementById('add');

//fetching item using local storage

function getItems() {
    const value = localStorage.getItem('todo') || "[]";

    console.log(value);
}

getItems();

