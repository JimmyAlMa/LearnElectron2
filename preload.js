const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('database-api', {
    getTodos: () => ipcRenderer.invoke('get-todos')
})