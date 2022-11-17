// npx nodemon server.js运行

const express = require('express')

const app = express()

app.get('/server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.send('hello ajax')
})

app.all('/json-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  const data = {
    name: 'hello'
  }
  let str = JSON.stringify(data)
  response.send(str)
})

app.get('/delay', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  setTimeout(() => {
    response.send('delay');
  }, 3000)
})

app.all('/jquery-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  const data = {
    name: 'hello'
  }
  response.send(JSON.stringify(data));
})


app.listen(8000, () => {
  console.log("8000 listening")
})