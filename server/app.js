require('dotenv').config()
async function bootstrap() {
  const express = require('express')
  const cors = require('cors')

  const notesRouter = require('./notes.router')
  const { initDb } = require('./db')

  const app = express()

  const { PORT } = process.env

  await initDb();

  app.use(cors({
    origin: true,
    credentials: true,
  }))

  app.use('/api/v1/notes', notesRouter)

  app.listen(PORT, () => {
    console.log('Server has been started on PORT ', PORT)
  })
}

bootstrap();