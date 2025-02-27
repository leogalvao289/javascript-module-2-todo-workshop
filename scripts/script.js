//Ejercicios 2 y 3:
//let mySelector = document.querySelector(".button");
//mySelector.style.backgroundColor = "green";
//console.log(mySelector);

//---------------------------------------------------------------------------------------

//Contenido del archivo inicial:
//alert("hello!");

//document.querySelector('#new-todo').addEventListener('submit', (e) => {
//    e.preventDefault();
//    const text = e.target.elements.text.value.trim();
//    alert(text);
//})


//Ejercicio 14:
const filters = { //Creamos objeto
  searchTitle: "",
  showFinished: false,
  showUnfinished: false,
};

// Ejercicio 15:
const setFilters = (updates) => {  //1. Creamos una función con un parámetro
  if (typeof updates.searchTitle === "string") {
      filters.searchTitle = updates.searchTitle;
  }
  if (typeof updates.showFinished === "boolean") {
      filters.showFinished = updates.showFinished;
  }
  if (typeof updates.showUnfinished === 'boolean') {
      filters.showUnfinished = updates.showUnfinished;
  };
};

//Ejercicio 16:
document.querySelector('#search-text').addEventListener('input', (e) => {
  setFilters({
      searchTitle: e.target.value
  });
  renderTodos(todos);
});

document.querySelector('#show-finished').addEventListener('change', (e) => {
  setFilters({
      showFinished: e.target.checked
  });
  renderTodos(todos);
});

document.querySelector('#show-unfinished').addEventListener('change', (e) => {
  setFilters({
      showUnfinished: e.target.checked
  });
  renderTodos(todos);
});

//Ejercicio 17:
const renderTodos = (todos) => {
  let filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(filters.searchTitle.toLowerCase()))
  if(filters.showFinished && filters.showUnfinished) {
  } else if(filters.showFinished) {
    filteredTodos = filteredTodos.filter((todo) => todo.completed)
  } else if(filters.showUnfinished) {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed)
  }
  
  const todoList = document.querySelector('#todos')
  todoList.innerHTML = ''

  if (filteredTodos.length > 0) {
      filteredTodos.forEach((todo) => {
          todoList.appendChild(generateTodoDOM(todo))
      });
  } else {
      const messageEl = document.createElement('p')
      messageEl.classList.add('empty-message')
      messageEl.textContent = 'There are no todos to show'
      todoList.appendChild(messageEl)
  };
};


//Ejercicio 12:
const generateTodoDOM = (todoObj) => { //1. Creamos de nuevo la función
  const todoEl = document.createElement('label');
  const containerEl = document.createElement('div');
  const todoText = document.createElement('span');

  // Setup todo checkbox
  const checkbox = document.createElement('input'); //2. Creamos elemento "input"
  checkbox.setAttribute('type', 'checkbox'); //3. 
  checkbox.checked = todoObj.completed; //4. Para poner la propiedad que creamos anteriormente
  containerEl.appendChild(checkbox);
  checkbox.addEventListener('change', () => { //6. Cuando cambie se ejecutará lo siguiente:
      toggleTodo(todoObj.title); //6. toggleTodo de momento no existe esta función, se creará luego.
      renderTodos(todos); //6. Función de devolución de llamada para actualizar la vista en la pantalla
  });

  todoText.textContent = todoObj.title; //Modificamos a todoObj.title
  containerEl.appendChild(todoText);

  //Setup container
  todoEl.classList.add("list-item"); //7.
  containerEl.classList.add("list-item__container"); //7.
  todoEl.appendChild(containerEl); //8.


  // Setup the remove button
  const removeButton = document.createElement("button"); 
  removeButton.textContent = "remove"; 
  removeButton.classList.add("button--text"); 
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", ()=>{
      removeTodo(todoObj.title); //10. Modificar removeTodo por todoObj.title
      renderTodos(todos);
  });

  return todoEl; //9. Retornar 
};

//---------------------------------------------------------------------------------------
//Ejercicio 13:
const toggleTodo = (title) => { //1. Creamos función toggleTodo --> Encuentra una tarea específica y si existe le cambia el valor (true o false)
  const todo = todos.find((todo) => todo.title.toLowerCase() === title.toLowerCase()); //2.
  if (todo) {
      todo.completed = !todo.completed;
      //Ejercicio 20: Invocamos la función "saveTodosToLocalStorage"
      saveTodosToLocalStorage();
  };
};

//---------------------------------------------------------------------------------------

/*
//Ejercicio 6:
const generateTodoDOM = (todo) => { //1. Crear función que toma un parámetro: todo.
  const todoEl = document.createElement('label'); //2. Se crean tres elementos que sólo estan en el JavaScript
  const containerEl = document.createElement('div'); //3.
  const todoText = document.createElement('span'); //4.
//Ejercicio 10 - Parte I
  // Setup the remove button
  const removeButton = document.createElement("button"); //Creamos variable
  removeButton.textContent = "remove"; // Asignar valor del texto que queremos que tenga el botón
  removeButton.classList.add("button--text"); //Agregamos una clase
  // Setup the todo text
//    todoText.textContent = todo; //5. Asignar el valor "todo" (parámetro) a "todoText" usando la propiedad ".textContent"
  containerEl.appendChild(todoText); //6. Dentro del contenedor poniendo el elemento "todoText" / Contenedor que existe en el javaScript
  
  // Setup container
//    todoEl.classList.add("list-item"); //7.
  containerEl.classList.add("list-item__container"); //7.
//    todoEl.appendChild(containerEl); //8.
//Ejercicio 10 - Parte II
  // Setup the remove button
//    todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", ()=>{
      removeTodo(todoText);
      renderTodos(todos);
  })
  return todoEl; //9. Retornar 
}
*/
//---------------------------------------------------------------------------------------

/*
//Ejercicio 7 - Parte I:
const renderTodos = todos => { //1. Crear función
  const todoList = document.querySelector("#todos"); //2
//    todoList.innerHTML = ''; //3. Eliminar todo dentro de todoList usando la propiedad: innerHTML
//Ejercicio 8:
  if (todos.length >0) { // Verificar si el arreglo es mayor a 0, quiere decir que no esta vacío si tiene algo mayor a 0.
  //Ejercicio 7 - Parte II:
//    todos.forEach((todo) => {
      const newTodo = generateTodoDOM(todo);
//        todoList.appendChild(newTodo);
  })
  } else {
      const messageEl = document.createElement("p");
      messageEl.classList.add('empty-message'); //Ejercicio 8:
      messageEl.textContent = 'There are no todos to show'; //Ejercicio 8:
//        todoList.appendChild(messageEl);
  }
}
*/
//---------------------------------------------------------------------------------------

//Ejercicio 10
const removeTodo = title => { //1. Cambiamos parámetro a title
  const todoIndex = todos.findIndex((todo)=>{
      return todo.title.toLowerCase() === title.toLowerCase(); //Modifique de todo a todo.title - Ejercicio 12
  })
  if (todoIndex > -1) {
      todos.splice(todoIndex, 1);
      //Ejercicio 20:
      saveTodosToLocalStorage();
  };
};

/*
//Ejercicio 9:
const removeTodo = todoEl => { //1. Crear una función
  const todoIndex = todos.findIndex((todo)=>{
      return todo.title.toLowerCase() === todoEl.toLowerCase(); //Modifique de todo a todo.title - Ejercicio 12
  })
  if (todoIndex > -1) {
//        todos.splice(todoIndex, 1)
  }
}
*/
//---------------------------------------------------------------------------------------

/*
Ejercicio 11:
Modify createTodo function
Create an Object with two properties:
title which will contain text value
And completed which is a boolean to represent status of todo item
*/

//---------------------------------------------------------------------------------------

//.addEventListener Permite crear eventos
//Ejercicio 5:
let todos = [ ];
//function createTodo (text) { //Comento función creada en el ejercicio 5 ya que se modifica en el ejercicio 11
//.    todos.push(text);
//}

//Ejercicio 11:
const createTodo = (text) => { //Función createTodo modificada ---> Añadir tareas
  todos.push({
      title: text, //Propiedad 1
      completed: false, //Propiedad 2, falso porque no se va crear una tarea que ya está completada.
  });
  //*Ejercicio 20: Invocamos la función "saveTodosToLocalStorage"
  saveTodosToLocalStorage(); 
};

document.querySelector('#new-todo').addEventListener('submit', (evento) => {
  evento.preventDefault()
  const text = evento.target.elements.text.value.trim()

  if (text.length > 0) {
      createTodo(text)
      evento.target.elements.text.value = ''
     };

  renderTodos(todos);
});

//Ejercicio 21:
fetchTodosFromLocalStorage();

//Ejercicio 8:
renderTodos(todos);

//---------------------------------------------------------------------------------------

//Ejercicio 4:
//document.querySelector("#new-todo").addEventListener("submit", (alertSomething));

//function alertSomething(evento) {
//  evento.preventDefault();
//  let text = evento.target.elements.text.value.trim();
//  console.log(text);
//}

//---------------------------------------------------------------------------------------

//Otra manera de hacer el ejercicio 4:
//document.querySelector('#new-todo').addEventListener('submit', (e) => {
//    e.preventDefault()
//    const text = e.target.elements.text.value.trim()
//    console.log(text)
//})

//---------------------------------------------------------------------------------------


//Ejercicio 18:
function saveTodosToLocalStorage(){ //Creamos una función que nos permite guardarla en la memoria
  localStorage.setItem('todos', JSON.stringify(todos)) //Guardar matriz "todos" en formato JSON
};

//Ejercicio 19:
function fetchTodosFromLocalStorage(){ //Creamos función
  const todosJSON = localStorage.getItem('todos'); //Guardamos los datos en una variable
  if (todosJSON) {
      todos = JSON.parse(todosJSON); //Transforma los valores ingresados a formato javaScript
  } else {
      todos = []; //Si no que siga siendo un arreglo vacio
  };
};

//Ejercicio 21:
window.addEventListener("storage", (e) =>{
  if (e.key === 'todos'){
      fetchTodosFromLocalStorage();
      renderTodos(todos);
  };
});

fetchTodosFromLocalStorage()
renderTodos(todos)