const { app, Menu } = require("electron");
const isWindows = process.platform === "wind32";

const setMainMenu = () => {
  const template = [
    {
      label: isWindows ? "File" : app.getName(),
      submenu: [
        {
          label: "Refresh",
          click() {
            //console.log("Refreshing...");
          }
        },
        {
          label: isWindows ? "Exit" : `Quit ${app.getName()}`,
          accelerator: isWindows ? "Alt+F4" : "CmdOrCtrl+Q",
          click() {
            app.quit();
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

module.exports = { setMainMenu };
