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

function updateItem(item, key , value ){
    item[key] = value;
    setItems(items);
    refreshList();
}

function refreshList(){
    toDoItems.innerHTML = "";

    for ( const item of items){
        const itemElement =  itemTemplate.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector('.item-description');
        const completedInput = itemElement.querySelector('.item-completed');

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", completedInput.value);
        });

       completedInput.addEventListener("change", () => {
            updateItem(item, "completed", 
            completedInputInput.checked);
        });

        toDoItems.append(itemElement);

        
    }
}

addButton.addEventListener('click', () => {
     addItem();
})

refreshList();



