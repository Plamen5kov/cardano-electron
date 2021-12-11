const app = document.getElementById('app')
if (app) {
    setInterval(() => {
        app.innerHTML = 'Hello, world!'
    }, 1000)
}