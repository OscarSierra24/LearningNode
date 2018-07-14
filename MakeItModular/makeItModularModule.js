var fs = require('fs') 
var path = require('path')

function directoryReading(dirName, callback){
    fs.readdir(dirName,(err,data)=>{
        err ? callback(err) : callback(err,data)
    })
}

function filteringFunction(dirFiles, fileNameExt, callback){
    let filesWithExt = []
    for(let i = 0; i<dirFiles.length; i++){
        if(path.extname(dirFiles[i]) == "." + fileNameExt){
            filesWithExt.push(dirFiles[i])
        }
    }
    callback(null, filesWithExt)
}


module.exports = (dirName, fileNameExt, callback) => {
    directoryReading(dirName, (err, files) =>{
        if (err){
            return callback(err)
        }
        filteringFunction(files, fileNameExt, (err,filesWithExt)=>{
            err ? callback(err) : callback(null, filesWithExt)
        })

    })
}