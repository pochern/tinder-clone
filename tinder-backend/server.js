import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import Cards from './dbCards.js'

// security prerequisite - adds headers to requests
import Cors from 'cors'

// App config
const app = express()
// for env variables
dotenv.config()
const port = process.env.PORT || 8001
const connection_url = process.env.DB_CONN

// Middlewares
app.use(express.json())
app.use(Cors())

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

// API endpoints
app.get('/', (req, res) => res.status(200).send('Server home'))

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body

  Cards.create(dbCard, (err, data) => {
    if (err) {
      // if there is an error, 500 = internal server error
      res.status(500).send(err)
    } else {
      // otherwise ok, 201 = created success
      res.status(201).send(data)
    }
  })
})

// to find data
app.get('/tinder/cards', (req, res) => {
  Cards.find((err,data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      // 200 = ok success
      res.status(200).send(data)
    }
  })
})

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))
