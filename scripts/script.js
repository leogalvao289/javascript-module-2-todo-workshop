 

/* Exercise 1 */

alert('Bienvenido!')
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();
  alert(text);
})

// preventDefault() => evita que a pagina se atualize 
//document.querySelector('#mainHeader')  // => permite buscar uns tag por el nombre del selector 
//document.querySelectorAll('p')          // => seleciona todos los elementos que cumplan una condicion


/* Exercise 2 */ /*Exercise 3 */

let prueba = document.querySelector('.button')  //=> => permite buscar uns tag por el nombre del selector 
prueba.style.backgroundColor = 'green'
prueba.addEventListener('click', (alertSomething))
 

function alertSomething () {
  alert('Something')
}

/*Ejercicio 4 */

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


/* Ejercicio 7 */

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

const createTodo = (text) => {
  todos.push({
      title: text,
      completed: false
  })
}

/* Ejercicio 12 */ 

const generateTodoDOM = (todoObj) => {
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const todoText = document.createElement('span')

  // Setup todo checkbox
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todoObj.completed
  containerEl.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
      toggleTodo(todoObj.title)
      renderTodos(todos)
  })

  // Setup the todo text
  todoText.textContent = todoObj.title
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
      removeTodo(todoObj.title)
      renderTodos(todos)
  })

  return todoEl
}

/* Ejercicio 13  */ 

const toggleTodo = (title) => {
  const todo = todos.find((todo) => todo.title.toLowerCase() === title.toLowerCase())

  if (todo) {
      todo.completed = !todo.completed
  }
}

const removeTodo = (title) => {
  const todoIndex = todos.findIndex((todo) => todo.title.toLowerCase() === title.toLowerCase())

  if (todoIndex > -1) {
      todos.splice(todoIndex, 1)
  }
}

/* Ejercicio 14 */ 

const filters = {
  searchTitle: '',
  showFinished: false,
  showUnfinished: false
}


/* Ejercicio 15 */ 

const setFilters = (updates) => {
  if (typeof updates.searchTitle === 'string') {
      filters.searchTitle = updates.searchTitle
  }
  if (typeof updates.showFinished === 'boolean') {
      filters.showFinished = updates.showFinished
  }
  if (typeof updates.showUnfinished === 'boolean') {
      filters.showUnfinished = updates.showUnfinished
  }
}

/* Ejercicio 16 */ 

document.querySelector('#search-text').addEventListener('input', (e) => {
  setFilters({
      searchTitle: e.target.value
  })
  renderTodos(todos)
})

document.querySelector('#show-finished').addEventListener('change', (e) => {
  setFilters({
      showFinished: e.target.checked
  })
  renderTodos(todos)
})

document.querySelector('#show-unfinished').addEventListener('change', (e) => {
  setFilters({
      showUnfinished: e.target.checked
  })
  renderTodos(todos)
})

/* Ejercicio 17 */

const renderTodos = (todos) => {
  // filtered Todos
  let filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(filters.searchTitle.toLowerCase()))
  if(filters.showFinished && filters.showUnfinished) {
    // do nothing
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
      })
  } else {
      const messageEl = document.createElement('p')
      messageEl.classList.add('empty-message')
      messageEl.textContent = 'There are no todos to show'
      todoList.appendChild(messageEl)
  }
}