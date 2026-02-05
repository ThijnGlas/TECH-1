const express = require('express')
const app = express()
const port = 3000

let users = [{
  id: 1,
  name : "Thijn",
  age: 22
},{
  id: 2,
  name : "Ruben",
  age: 22
},{
  id: 3,
  name : "Finn",
  age: 23
},{
  id: 4,
  name : "Sarah",
  age: 21
},{
  id: 5,
  name : "Timo",
  age: 20
},


]

// app.use(express.static('public'))

app.use('/public', express.static('public'))

const path = require('path')



app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/public/css/style.css">
      </head>
      <body>
        <h1>Home</h1>
      </body>
    </html>
  `)
})

app.get('/login', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/public/css/style.css">
      </head>
      <body>
        <h1>login</h1>
      </body>
    </html>
  `)
})

app.get('/about', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/public/css/style.css">
      </head>
      <body>
        <h1>about</h1>
      </body>
    </html>
  `)
})

app.get('/user/:id', async (req, res, next) => {
  const gevondenUser = users.find( (user) => {return user.id == req.params.id})
  // const user = await getUserById(req.params.id)
  if (!gevondenUser) return res.status(404).send("User not found");

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/public/css/style.css">
      </head>
      <body>
        <h1>${gevondenUser.name}</h1>
      </body>
    </html>
  `);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req, res, next) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/public/css/style.css">
        <title>404 Not Found</title>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, de pagina die je zoekt bestaat niet.</p>
        <a href="/">Ga terug naar home</a>
      </body>
    </html>
  `);
}); 