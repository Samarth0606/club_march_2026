const express = require('express');
const app = express()

// "/" = root route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sam', (req, res) => {
  res.send('Hello Sam!')
})


const PORT = 8000 //5000 , 5050 , 8080 , 8000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})