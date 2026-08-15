const textInput = document.querySelector('#addInput')
const addButton = document.querySelector('#addButton')
const dataList = document.querySelector('#dataList')

async function loadTodos() {
    dataList.innerHTML = ''
    const todos = await window.databaseApi.getTodos()

    todos.forEach(todo => {
        dataList.insertAdjacentHTML('beforeend', `
            <li class="list" data-id="${todo.id}">
                <div><b>${todo.task}</b></div>
                <button class="deleteButton"><b>Delete</b></button>
            </li>
            `)
    })
}

addButton.addEventListener('click', async () => {
    const text = addInput.value.trim()
    if (!text) return

    await window.databaseApi.addTodos(text)
    addInput.value = ''
    loadTodos() // Refresh list
})

dataList.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.deleteButton')) {
        const listItem = target.closest('.list')

        if (listItem) {
            listItem.remove()
        }
    }
})

loadTodos()