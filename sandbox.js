/* 
1. Write HTML Code
2. Add styles and icons
3. Select necessary DOM elements
4. Events and some events examples
5. Submit event
6. Adding input todo list
7. Event Propagation (bubbling and capturing)
8. Delete todo list
9. Edit todo list
*/

// Querying DOM elements
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector(".todo_input");
const todosList = document.querySelector(".todos");

// Declare my variables and data

// Create my functions
const todoListAppend = (todo) => {
  let listTemplate = `<li
            class="bg-slate-800 text-white py-3 px-5 text-xl flex items-center justify-between rounded"
          >
            <span>${todo}</span>

            <div>
              
                <i class="fa-solid fa-trash mr-2 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out delete cursor-pointer"></i>

                <i class="fa-solid fa-pen-to-square hover:text-gray-100 transition duration-300 ease-in-out edit cursor-pointer"></i>
              
            </div>
          </li>`;

  todosList.innerHTML += listTemplate;
};

// Add event listeners

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  if (newTodo.trim().length) {
    todoListAppend(newTodo);
  } else {
    alert("Add an item to continue");
  }

  todoForm.reset();
});

todosList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("edit")) {
    const todoEdit = e.target.parentElement.parentElement.textContent.trim();
    todoInput.value = todoEdit;
    e.target.parentElement.parentElement.remove();
  }
});
