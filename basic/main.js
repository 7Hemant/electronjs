const { app, BrowserWindow } = require("electron");
/**
 *
 * app, which controls your application's event lifecycle.
 * BrowserWindow, which creates and manages app windows.
 */
const path = require("path");

/**
 * The createWindow() function loads
 * your web page into a new BrowserWindow instance
 */
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
