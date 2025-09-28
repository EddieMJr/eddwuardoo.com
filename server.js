const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  console.log('Server connected to the port!')
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'abt.html'))
})

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}!`)
})