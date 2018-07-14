var savedValue = 0;

for (let i = 2; i<process.argv.length ; i++){
    if(!isNaN(Number(process.argv[i]))){
        savedValue += Number(process.argv[i])
    }
}

console.log(savedValue)