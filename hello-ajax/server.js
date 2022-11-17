const express = require('express')

const app = express()

app.get('/server', (request, response)=>{
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.send('hello ajax')
})

app.all('/json-server', (request, response)=>{
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  const data = {
    name: 'atguigu'
  }
  let str = JSON.stringify(data)
  response.send(str)
})

app.listen(8000, ()=>{
  console.log("8000 listening")
})