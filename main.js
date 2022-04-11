const { app, BrowserWindow, Notification } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    showNotification()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})



const NOTIFICATION_TITLE = 'Basic Notification'
const NOTIFICATION_BODY = 'Notification from the Main process'

function showNotification() {
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

