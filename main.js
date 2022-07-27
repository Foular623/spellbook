
const { app, BrowserWindow, ipcMain } = require("electron");

let appWin;

createWindow = () => {
    appWin = new BrowserWindow({
        width: 1280,
        height: 720,
        title: "Angular and Electron",
        resizable: false,
        icon: `file://${__dirname}/dist/favicon.ico`,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            webSecurity: true,
            preload: `${app.getAppPath()}/preload.js`
        }
    });
    
    appWin.loadURL(`file://${__dirname}/dist/index.html`);

    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

ipcMain.on("message", (event, arg) => {
    console.log(arg);
    event.reply("reply", "pong");
});

ipcMain.on("getSpellList", (event, arg) => {
    console.log(arg);
    event.reply("reply", "pong");
    
});