var http = require('http')
var URL = process.argv[2]


http.get(URL, (res) => {
    res.setEncoding("utf8")

    res.on("data",(data)=>{
        console.log(data)
    })

    res.on("error", (err) =>{
        console.error(err)
    })
}).on('error', console.error)
