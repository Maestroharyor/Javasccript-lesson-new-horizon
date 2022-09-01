/* 
1. Write HTML Code
2. Add styles and icons
3. Select necessary DOM elements
4. Events and some events examples
5. Submit event
6. Adding input todo list
7. Delete todo list
8. Edit todo list
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
              <button
                class="mr-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300 ease-in-out delete_button"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
              <button
                class="hover:text-gray-100 transition duration-300 ease-in-out edit_buttom"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </li>`;

  todosList.innerHTML = listTemplate;
};

// Add event listeners

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoListAppend(newTodo);

  todoForm.reset();
});
