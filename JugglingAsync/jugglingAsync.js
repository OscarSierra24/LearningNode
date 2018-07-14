var http = require('http')
var URLs = [process.argv[2], process.argv[3], process.argv[4]]
var messages = new Array(3).fill("")
var finished = new Array(3).fill(false)

for(let i = 0; i < 3; i++){
    httpGet(i)
}

function httpGet(i){
    http.get(URLs[i], (res) =>{
        res.on("data", (data)=>{
            messages[i] += data
        })
        res.on("end", ()=>{
            finished[i] = true
            messagesCompleted(finished) ? printMessages(messages) : null
        })
    })
}

function messagesCompleted(finished){
    for(let i=0; i<finished.length; i++){
        if(finished[i] == false){
            return false
        }
    }
    return true
}

function printMessages(messages){
    messages.forEach((message)=>{
        console.log(message)
    })
}