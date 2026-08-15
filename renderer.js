const textInput = document.querySelector('#addInput')
const addButton = document.querySelector('#addButton')
const dataList = document.querySelector('#dataList')

addButton.addEventListener('click', () => {
    dataList.insertAdjacentHTML('beforeend', `
        <li class="list">
            <div><b>${textInput.value}</b></div>
            <button class="deleteButton"><b>Delete</b></button>
        </li>
        `)
})