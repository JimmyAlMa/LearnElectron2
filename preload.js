const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('databaseApi', {
    getTodos: () => ipcRenderer.invoke('get-todos'),
    addTodos: (taskText) => ipcRenderer.invoke('add-todos', taskText),
    deleteTodos: (id) => ipcRenderer.invoke('delete-todos', id)
})