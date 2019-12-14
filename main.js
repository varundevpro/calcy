const path = require('path');

const electron = require('electron');

const { app, BrowserWindow, Menu, ipcMain, MenuItem } = electron;

let mainWindow;

ipcMain.on('synchronous-message', (event, arg) => {
  app.quit();
})

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 350,
    height: 500,
    // resizable: false,
    title: 'Calcy',
    transparent: true,
    frame: false,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png')
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // mainWindow.webContents.openDevTools();

  const menuConfig = Menu.buildFromTemplate([
    {
      label: 'Options',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CommandOrControl+R',
          role: 'reload',
        },
        {
          label: 'Quit',
          accelerator: 'CommandOrControl+W',
          role: 'close',
        },
      ],
    },

  ]);

  Menu.setApplicationMenu(menuConfig);
});

const menu = new Menu();
menu.append(new MenuItem({
  label: 'Reload',
  accelerator: 'CommandOrControl+R',
  role: 'reload',
}));
menu.append(new MenuItem({
  label: 'Quit',
  accelerator: 'CommandOrControl+W',
  role: 'close',
}));

// menu.append(new MenuItem({ type: 'separator' }));
// menu.append(new MenuItem({
//   label: 'Copy',
//   accelerator: 'CmdOrCtrl+C',
//   click: function () {
//     console.log("hi");
//   }
// }));

app.on('browser-window-created', function (event, win) {
  win.webContents.on('context-menu', function (e, params) {
    menu.popup(win, params.x, params.y);
  });
});

ipcMain.on('show-context-menu', function (event) {
  const win = BrowserWindow.fromWebContents(event.sender);
  menu.popup(win);
});