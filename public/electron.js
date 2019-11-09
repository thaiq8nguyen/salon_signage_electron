const { app, Menu, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
require("electron-reload")(__dirname);
let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    maximizable: true,
    alwaysOnTop: true,
    title: "Salon Signage",
    webPreferences: { nodeIntegration: true }
  });

  mainWindow.loadURL(
    isDev ? "http://localhost:3000" : `file://${__dirname}/index.html`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

const generateMenu = () => {
  const template = [
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forcereload" },
        { role: "toggledevtools" }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};
app.on("ready", () => {
  createWindow();
  generateMenu();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
