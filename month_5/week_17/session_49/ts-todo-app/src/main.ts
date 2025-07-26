interface Todo {
    text: string;
    completed: boolean;
  }
  
  const form = document.getElementById("todo-form") as HTMLFormElement;
  const input = document.getElementById("todo-input") as HTMLInputElement;
  const list = document.getElementById("todo-list") as HTMLUListElement;
  
  
  let todos: Todo[] = [];
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
  }

  
  function renderTodos(): void {
    list.innerHTML = ""; 
    todos.forEach(todo => {
      const li = document.createElement("li");
  
     
      li.innerHTML = `
        <input type="checkbox" ${todo.completed ? "checked" : ""} />
        <span style="text-decoration: ${todo.completed ? "line-through" : "none"}">${todo.text}</span>
      `;
  
     
      const checkbox = li.querySelector("input[type='checkbox']") as HTMLInputElement;
      checkbox.classList.add('checkbox')
      checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        console.log(todo.completed)
        renderTodos();
      });
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "delete";
      deleteBtn.classList.add('delete')
      deleteBtn.addEventListener("click", () => {
        todos = todos.filter(t => t !== todo); 
        renderTodos();
      });
  
  
      li.appendChild(deleteBtn);
      li.classList.add('todo-item')
      list.appendChild(li);
    });
  

    localStorage.setItem("todos", JSON.stringify(todos));
  }
  

  function handleFormSubmit(event: SubmitEvent): void {
    event.preventDefault();
  
    const newTodoText = input.value.trim();
    if (newTodoText === "") return;
  
    const newTodo: Todo = {
      text: newTodoText,
      completed: false,
    };
    todos.push(newTodo);
    input.value = "";
    renderTodos();
  }
  
  form.addEventListener("submit", handleFormSubmit);
  renderTodos();