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

// The foundation of this project
function refreshList(){
    // one of the last things 
    //Sorting the items when a task is complete it must go in the bottom
    items.sort((a,b) => {
        if(a.completed){
            return 1;
        }

        if(b.completed){
            return -1;
        }
        //This will prioritize your checkboxes based on your tasks
        return a.description < b.description ? -1 : 1;
    })
    toDoItems.innerHTML = "";

    // How the task gets cloned
    for ( const item of items){
        const itemElement =  itemTemplate.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector('.item-description');
        const completedInput = itemElement.querySelector('.item-completed');

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value);
        });

       completedInput.addEventListener("change", () => {
            updateItem(item, "completed", 
            completedInput.checked);
        });

        toDoItems.append(itemElement);

        
    }
}
// the function when your adding another task
addButton.addEventListener('click', () => {
     addItem();
})

refreshList();



