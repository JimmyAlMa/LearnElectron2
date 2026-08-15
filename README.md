# Learn Electron - SQLite Integration

This repository is built for practicing the integration of **Electron.js** with an **SQLite** database using IPC (*Inter-Process Communication*).

## Tech Stack

* Electron.js
* SQLite (`better-sqlite3`)
* JavaScript (DOM Manipulation)

## Key Concepts & Features

* **IPC Communication**: Connecting the *Main Process* and *Renderer Process* via `ipcRenderer` and `contextBridge`.
* **CRUD Operations**:
  * Create: Insert new tasks into the database (`INSERT INTO`).
  * Read: Fetch and render tasks on initial load (`SELECT`).
  * Delete: Remove tasks by ID using event delegation (`DELETE FROM`).
* **Prepared Statements**: Preventing SQL syntax errors and ensuring safe queries.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
2. Run the application:
   ```bash
   npm start