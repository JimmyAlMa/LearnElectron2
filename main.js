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

app.whenReady().then(createWindow)