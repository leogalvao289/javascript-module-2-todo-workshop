 

/* Exercise 1

alert('Bienvenido!')
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();
  alert(text);
})

// preventDefault() => evita que a pagina se atualize 
//document.querySelector('#mainHeader')  // => permite buscar uns tag por el nombre del selector 
//document.querySelectorAll('p')          // => seleciona todos los elementos que cumplan una condicion


/* Exercise 2 */ /*Exercise 3 

let prueba = document.querySelector('.button')  //=> => permite buscar uns tag por el nombre del selector 
prueba.style.backgroundColor = 'green'
prueba.addEventListener('click', (alertSomething))
 

function alertSomething () {
  alert('Something')
}

/*Ejercicio 4 

document.querySelector('#new-todo').addEventListener('submit', (alertSomething));
 
function alertSomething (evento) { 
evento.preventDefault();
let text = evento.target.elements.text.value.trim()
console.log(text);
}



/* Ejercioc 5 */

let todos = []

const createTodo = text => {
  todos.push(text)
}

document.querySelector('#new-todo').addEventListener('submit', e => {
  e.preventDefault()
  const text = e.target.elements.text.value.trim()
  {
    if (text.length > 0) createTodo(text);
    e.target.elements.text.value = '';
  }
  renderTodos(todos);
})

/* Ejercicio 6 */

const paragraph = document.createElement('p');
const header = document.querySelector('.header');
header.appendChild(paragraph);

paragraph.textContent = ''
console.log(paragraph);

const generateTodoDOM  = todo => {
 let todoEl = document.createElement('label'); /* crear el element */
 let containerEl = document.createElement('div');
 let todoText = document.createElement('span');
 const removeButton = document.createElement('button');

  removeButton.textContent = 'remove';
  todoText.textContent = todo;   /*assignar valores */ 
  containerEl.appendChild(todoText)
 
  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)
  todoEl.appendChild(removeButton)
 
  removeButton.classList.add('button', 'button--text')
  removeButton.addEventListener('click', () => {
    removeTodo(todoText)
    renderTodos(todos)
  
})
  return todoEl
}


/* Ejercicio 7 

const renderTodos = (todos) => {
  const todoList = document.querySelector('#todos')
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const newTodo = generateTodoDOM(todo);
          todoList.appendChild(newTodo);
  })
};


/* Ejercicio 8 */ 

const renderTodos = (todos) => {
    const todoList = document.querySelector('#todos')
    todoList.innerHTML = ''

    if (todos.length > 0) {
        todos.forEach((todo) => {
            todoList.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no todos to show'
        todoList.appendChild(messageEl)
    }
    
}
renderTodos(todos);

/* Ejercico 9 */ 


const removeTodo = todoEl => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.toLowerCase() === todoEl.textContent.toLowerCase()
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

/* Ejercico 10 */ 

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoText = document.createElement('span')

    // Setup the todo text
    todoText.textContent = todo
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todoText)
        renderTodos(todos)
        return todoEl
    })

  }


/* Ejercicio 11 */ 