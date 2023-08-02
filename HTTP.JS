const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(` <h1>welcome to our homepage</h1> `)
    }

    if (req.url === ('/about')) {
        res.end(`<h1>this is our about info page </h1>`)
    }
    res.end(`
    <h1>Oops</h1>
    <p> the page you're looking for is not available</p>
    <a href ="/"> back home </a> 
    `)
}
)


server.listen(5000)