var http = require('http')
var URLs = [process.argv[2], process.argv[3], process.argv[4]]
var messages = new Array(3).fill("")
var finished = new Array(3).fill(false)

http.get(URLs[0],(res) =>{
    res.on("data", (data)=>{
        messages[0] += data 
    })
    res.on("end", ()=>{
        finished[0] = true
        messagesCompleted(finished) ? printMessages(messages) : null
    })
})

http.get(URLs[1],(res) =>{
    res.on("data", (data)=>{
        messages[1] += data 
    })
    res.on("end", ()=>{
        finished[1] = true
        messagesCompleted(finished) ? printMessages(messages) : null
    })
})

http.get(URLs[2],(res) =>{
    res.on("data", (data)=>{
        messages[2] += data 
    })
    res.on("end", ()=>{
        finished[2] = true
        messagesCompleted(finished) ? printMessages(messages) : null
    })
})


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