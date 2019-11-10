const { app, Menu, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

let mainWindow = null;

const isWindows = process.platform === "wind32";

const createWindow = () => {
  mainWindow = new BrowserWindow({
    title: "Salon Signage",
    center: true,
    backgroundColor: "#F7F7F7",
    width: 1920,
    height: 1080,
    maximizable: true,
    alwaysOnTop: true,

    webPreferences: { nodeIntegration: true }
  });

  mainWindow.loadURL(
    isDev ? "http://localhost:3000" : `file://${__dirname}/index.html`
  );

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

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
      label: isWindows ? "File" : app.getName(),
      submenu: [
        { role: "about" },
        {
          label: isWindows ? "Exit" : `Quit ${app.getName()}`,
          accelerator: isWindows ? "Alt+F4" : "CmdOrCtrl+Q",
          click() {
            app.quit();
          }
        }
      ]
    },
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
