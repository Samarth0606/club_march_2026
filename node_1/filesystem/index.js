const fs = require('fs')

// console.log(fs);

// create
// fs.writeFileSync('sam.txt' , "welcome to code_baithak" , {})

// read
// let data = fs.readFileSync('sam.txt' , {encoding:'utf-8'})
// let data = fs.readFileSync('sam.txt' , {})
// console.log(data.toString());

// update
fs.appendFileSync('sam.txt' , '\nthanks code_baithak' , {})

// delete
fs.unlinkSync('sam.txt')



