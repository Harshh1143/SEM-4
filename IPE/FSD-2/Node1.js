// Create HTTP webpage on which home page display “Home page”, student page shows
// “Student page” and any other page shows “Page Not found”.
// (Render Response & Routing)

const http = require("http")
var server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>Home Page </h1>")
        res.end()
    }
    else if(req.url==='/student'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>Student Page </h1>")
        res.end()
    }
    else {
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>404 Not found </h1>")
        res.end("THanks")
    }
})
server.listen(3000)