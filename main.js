const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const Database = require('better-sqlite3')
const path = require('path')
const fs = require('fs')

let db

function initDatabase() {
    const userDataPath = app.getPath('userData')

    if (!fs.existsSync(userDataPath)) {
        fs.mkdirSync(userDataPath, {recursive: true})
    }

    const dbPath = path.join(userDataPath, 'todo_app.db')
    db = new Database(dbPath)

    db.exec(`
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `)
}


function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    })

    win.loadFile('index.html')
}

ipcMain.handle('get-todos', () => {
    return db.prepare('SELECT * FROM todos ORDER BY id DESC').all()
})
ipcMain.handle('add-todos', (event, taskText) => {
    return db.prepare('INSERT INTO todos (task) VALUES (?)').run(taskText)
})
ipcMain.handle('delete-todos', (event, id) => {
    return db.prepare('DELETE FROM todos WHERE id = ?').run(id)
})

app.whenReady().then(() => {
    initDatabase()
    createWindow()
})