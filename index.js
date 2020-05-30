const newTodo = document.getElementById("new-todo")
const addTodo = document.getElementById("add-todo")
const todos = document.getElementsByTagName("ol")[0]
const addNewTodo = () => {
    const newId = getNewTodoId()
    if (newTodo.value) {
        const todoItem = document.createElement("li")
        todoItem.classList.add("list-item")
        todoItem.innerHTML = `
<div class="list-item-content">
        <input class="todo-check" type="checkbox" id="todo${newId}">
      <label class="todo-label" for="todo${newId}">
        <span></span>
        ${newTodo.value}
      </label>
      <button class="list-item-remove-btn"> X </button>
    </div>
    `
        todos.appendChild(todoItem)
        newTodo.value = ""
    }
}
addTodo.addEventListener("click", addNewTodo)

todos.addEventListener("click", ({target}) => {
    if (target.classList.contains("list-item-remove-btn")) {
        target.parentElement.parentElement.remove()
    }
})
newTodo.addEventListener("keydown", ({key}) => {
    if (key === 'Enter') {
        addNewTodo()
    }
})

function getNewTodoId() {
    return Date.now();
}