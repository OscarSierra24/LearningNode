var makeItModularModule = require('./makeItModularModule')

makeItModularModule(process.argv[2], process.argv[3], (err,filteredFilesInDir) =>{
    if(err){
        console.error(err)
        return
    }
    filteredFilesInDir.forEach( (file) => {
        console.log(file)
    });
})