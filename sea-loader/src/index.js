const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 750,
    height: 750,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation: false,
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    app.quit();
});