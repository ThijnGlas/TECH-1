const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('test')
  })

  app.get('/rrr', (req, res) => {
    res.send('rrr')
  })

  app.get('/ttt', (req, res) => {
    res.send('ttt')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})