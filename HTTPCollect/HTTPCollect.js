var http = require('http')
var bl = require('bl')

var URL = process.argv[2]

var content = ""
var messages = []

http.get(process.argv[2], (response) =>{
    response.pipe(bl((err, data)=>{
        if(err){
            return console.log(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})

// http.get(URL, (res) =>{
    // res.on("data", (data) =>{
    //     content += data
    // })    
    // res.on('end',()=>{
    //     console.log(content.length)
    //     console.log(content) 
        
    // })
// })
