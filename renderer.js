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
    textInput.value = ''
    loadTodos() // Refresh list
})

dataList.addEventListener('click', async (event) => {
    const target = event.target

    if (target.closest('.deleteButton')) {
        const listItem = target.closest('.list')
        const id = listItem.dataset.id

        await window.databaseApi.deleteTodos(id)
        loadTodos() // Refresh list
    }
})

loadTodos()