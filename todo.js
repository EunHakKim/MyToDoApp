const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener("click", () => {
    if(todoInput.value !== ''){ 
        addTodo();
    }
})

function addTodo() {
    const list = document.querySelector("#todoList");
    const todoInput = document.querySelector("#todoInput");
    const listItem = document.createElement("li");
    const checkBtn = document.createElement("button");

    listItem.innerText = todoInput.value;
    listItem.appendChild(checkBtn);

    list.appendChild(listItem);

    todoInput.value = "";
    checkBtn.addEventListener("click", () => {
        listItem.classList.toggle("complete");
    });
}