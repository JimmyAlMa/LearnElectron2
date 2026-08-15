const textInput = document.querySelector('#addInput')
const addButton = document.querySelector('#addButton')
const dataList = document.querySelector('#dataList')

addButton.addEventListener('click', () => {
    dataList.insertAdjacentHTML('beforeend', `
        <li class="list">
            <div><b>${textInput.value}</b></div>
            <button class="deleteButton"><b>Delete</b></button>
            <br><br>
            <hr>
        </li>
        `)
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