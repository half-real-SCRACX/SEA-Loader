const { app, BrowserWindow, ipcMain } = require('electron');
const {download} = require("electron-dl");
const path = require('path');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 550,
    height: 500,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation: false,
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow, () => {
    ipcMain.on("download", (event, info) => {
        download(BrowserWindow.getFocusedWindow(), info.url, info.properties)
            .then(dl => window.webContents.send("download complete", dl.getSavePath()));
    });
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
    app.quit();
});