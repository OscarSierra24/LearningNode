var fs = require('fs')
var path = require('path')

var pathToDir = process.argv[2]
var extension = process.argv[3]

fs.readdir(process.argv[2], (err, files)=>{
    files.forEach((file) => {
        if(path.extname(file) == "."+extension){
           console.log(file) 
        }
    })
})