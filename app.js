const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/login.html')
})
app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})