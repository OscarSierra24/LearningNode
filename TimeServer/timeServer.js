var net = require('net')
var date = new Date()

function formatDate(unformattedDate){
    if(unformattedDate < 10){
        unformattedDate = "0" + unformattedDate
    }
    return unformattedDate
}

var server = net.createServer((socket)=>{
    //socket.write() also works but socket.end(data) simplifies    
    //format: YYYY-MM-DD hh:mm
    let dateInFormat
    
    let month = formatDate(date.getMonth()+1)

    let day = formatDate(date.getDate())

    let hours = formatDate(date.getHours())

    let minutes = formatDate(date.getMinutes())


    dateInFormat = date.getFullYear() +"-"+ month +"-"+ day +" "+ hours +":"+ minutes

    socket.write(dateInFormat + "\n")
    socket.end()
})

server.listen(process.argv[2])