 

/* Exercise 1*/

document.querySelector('#mainHeader')  // => permite buscar uns tag por el nombre del selector 
document.querySelectorAll('p')          // => seleciona todos os elementos que cumplan una condicion

/* Exercise 2 */

let button = document.querySelector('button')  //=> => permite buscar uns tag por el nombre del selector 
button.style.backgroundColor = 'green'
console.log(button)

/*Exercise 3 */ 

const button = document.querySelector('.button')
myButton.addEventListener('click', alertSomething)

function alertSomething () {
  alert('Something')
}

/*Ejercicio 4 */

document.querySelector('#new-todo').addEventListener('submit', (alertSomething));
 
function alertSomething (event) { 
event.preventDefault();
const text = event.target.elements.text.value.trim()
console.log(text);
}



/* Ejercioc 5 */

let todos = []

const createAll = text => {
  todos.push(text)
}

document.querySelector('#new-todo').addEventListener('submit', e => {
  e.preventDefault()
  const text = e.target.elements.text.value.trim()
  {
    if (text.length > 0) createAll(text)
    e.target.elements.text.value = ''
  }
  console.log(todos)
})

/* Ejercicio 6 */

const generateTodoDOM = todo => {
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const todoText = document.createElement('span')

  todoText.textContent = todo
  tcontainerEl.appendChild(todoText)

  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  return todoEl
}

/* Ejercicio 7 */



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


const removeTodo = (todoEl) => {
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
    })

    return todoEl
}