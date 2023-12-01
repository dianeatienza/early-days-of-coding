const todoList = [];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i]; // we made a varibale to save the strings that we will input to the array
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        const html = `
         <div>${name}</div> 
         <div>${dueDate}</div>
         <button onclick="
         todoList.splice(${i}, 1);
         renderTodoList();
         "
         class="js-delete-button delete-button">Delete</button>
         `;  //this one naman is for us to generate an html code that we will put on Webpage
        todoListHTML += html;   // the same as todoListHTML = todoListHTML + html
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-todo-name');

    const name = inputElement.value;
   // console.log(name);

   const dateInputElement = document.querySelector('.js-due-date-input');

   const dueDate = dateInputElement.value;

   todoList.push({
    name: name,                 //you can just write this as name since same naman ang property and value
    dueDate: dueDate            // here same reason pwede kahit dueDate lang alone
   });

   console.log(todoList);

   inputElement.value = '';

   renderTodoList();
}

function inputTodoKeyDown(event) {
    if (event.key === 'Enter') {
        addTodo();
        renderTodoList();
    }
}