const textInput = document.querySelector('#addInput')
const addButton = document.querySelector('#addButton')
const dataList = document.querySelector('#dataList')

async function loadTodos() {
    dataList.innerHTML = ''
    const todos = await window.databaseApi.getTodos

    todos.forEach(todo => {
        dataList.insertAdjacentElement('beforeend', `
            <li class="list" data-id="${todo.id}">
                <div><b>${todo.task}</b></div>
                <button class="deleteButton"><b>Delete</b></button>
            </li>
            `)
    })
}

addButton.addEventListener('click', () => {
    dataList.insertAdjacentHTML('beforeend', `
        <li class="list">
            <div><b>${textInput.value}</b></div>
            <button class="deleteButton"><b>Delete</b></button>
            <br><br>
            <hr>
        </li>
        `)

        textInput.value = ''
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