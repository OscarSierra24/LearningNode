// var http = require('http')
// var fs = require('fs')

// var port = process.argv[2]
// var file = process.argv[3]



// var server = http.createServer( (req, res)=>{
//     let rr = fs.createReadStream(file)
//     rr.on('data', (data)=>{
//         // console.log(data.toString())
//         res.write(data)
//     })
//     rr.on('end', ()=>{
//         res.end()
//     })
// })

// server.listen(port)

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
