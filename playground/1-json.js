//======== 18. Storing Data with JSON
const fs = require('fs')
// const book ={
//     title : ' Ego is Enemy',
//     author: 'Alancx '
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// fs.writeFileSync('1-json.json',bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Alancx'
data.age = 24

const changed = JSON.stringify(data)
fs.writeFileSync('1-json.json',changed)
// console.log(data)

