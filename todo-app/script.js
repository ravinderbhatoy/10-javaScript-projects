const form = document.getElementById("form");
console.log(form);
const input = document.getElementById("input");
const todos = document.getElementById("todos");

const allTodos = JSON.parse(localStorage.getItem("todos"));
if (allTodos) {
    allTodos.forEach((todo) => {
        addTodo(todo.text, todo.completed);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo(text = "", completed = false) {
    
    console.log(text);
    let todo = "";
    if (text == "") {
        todo = input.value;
    } else {
        todo = text;
    }
    if (todo) {
        const li = document.createElement("li");
        if(completed){
            li.classList.add('completed')
        }
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            updateLS();
        });
        li.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            li.remove();
            updateLS();
        });
        li.innerText = todo;
        todos.appendChild(li);
        input.value = "";
        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll("li");
    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}
