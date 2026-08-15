const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const Database = require('better-sqlite3')
const path = require('path')
const fs = require('fs')

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

const db = new Database(path.join(__dirname, 'to-doList_data.db'))

db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`)

ipcMain.handle('get-todos', () => {
    return db.prepare('SELECT * FROM todos ORDER BY id DESC').all()
})

app.whenReady().then(createWindow)