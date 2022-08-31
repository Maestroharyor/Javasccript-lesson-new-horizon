// DOM - Document Object Model

/*
1. Select an element and store in a variable
2. Maybe listen to an event
3. Change something in an element
*/

// Selecting an element
// getElementById, getElementsByClassName, getElementsByTagName, getElementsByName, querySelector, querySelectorAll

const mainElement = document.getElementById("mainElement");

mainElement.classList.add("bg-gray-600", "px-10", "py-5", "text-white");

// const groceryList = document.getElementsByClassName("list-item");
// console.log(groceryList);
// Object.values(groceryList).forEach((list) => {
//   list.classList.add("border-4", "border-white");
// });

// const groceryList = document.getElementsByTagName("li");
// const groceryList = document.getElementsByName("list");

// groceryList.forEach((list) => {
//   list.classList.add("border-4", "border-white");
// });
const groceryList = document.querySelectorAll("li");
console.log(groceryList);
groceryList.forEach((list) => {
  list.classList.remove("bg-green-600");
  list.classList.add("border-4", "border-white", "bg-orange-500");
});
