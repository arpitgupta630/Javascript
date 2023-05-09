const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const newTodoItem = todoInput.value;
    const newTodoLi = document.createElement("li")
    const newTodoLiInnerHtml = `
        <span class="todo-text">${newTodoItem}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newTodoLi.innerHTML = newTodoLiInnerHtml;
    todoList.append(newTodoLi);
    todoInput.value = "";
});

todoList.addEventListener("click", (event)=>{
    console.log(event);
    if(event.target.textContent == "Done"){
        const todoText = event.target.parentNode.previousElementSibling;
        todoText.style.textDecoration = "line-through";
    }else if(event.target.textContent == "Remove"){
        const todoLi = event.target.parentNode.parentNode
        todoLi.remove();
    }
})