# first desktop application using electronjs

- const { app, BrowserWindow } = require("electron")

  - app, which controls your application's event lifecycle.
  - BrowserWindow, which creates and manages app windows.

- <pre>
  const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
    });
    win.loadFile("index.html");
  };
  </pre>
  - The createWindow() function loads your web page into a new BrowserWindow instance
