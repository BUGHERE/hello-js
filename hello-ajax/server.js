const express = require('express')

const app = express()

app.get('/server', (request, response)=>{
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.send('hello ajax get')
})

app.all('/server', (request, response)=>{
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  response.send('hello ajax post')
})

app.listen(8000, ()=>{
  console.log("8000 listening")
})