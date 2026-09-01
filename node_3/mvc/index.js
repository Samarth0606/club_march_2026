const express = require('express');
const app = express()

//ROOT ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/blogs' , (req,res)=>{
    res.send("heyy post request here")
})


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})