const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('hello world!')
  res.json({ message: 'Welcome to my express app.' })
})

app.get('/info', (req, res) => {
  res.json({ message: 'Message from info route.' })
})

app.listen(3000, () => {
  console.log('Server starting 3000')
})
