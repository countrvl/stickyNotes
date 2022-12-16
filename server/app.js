require('dotenv').config()
const express = require('express')
const cors = require('cors')

const notesRouter = require('./notes.router')

const app = express()

const { PORT } = process.env


app.use(cors({
  origin: true,
  credentials: true,
}))

app.use('/api/v1/notes', notesRouter)

app.listen(PORT, () => {
  console.log('Server has been started on PORT ', PORT)
})