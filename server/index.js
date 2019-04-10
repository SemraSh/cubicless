const express = require('express')
const bodyParser = require('body-parser') // converts the body of incoming requests into JSON objects.
const cors = require('cors') // configures Express to add headers stating that your API accepts requests coming from other origins. This is also known as Cross-Origin Resource Sharing (CORS).
const helmet = require('helmet') // secures Express apps with various HTTP headers.
const morgan = require('morgan') // adds some logging capabilities to the Express app

const data = require('../dummyData')

const app = express()

app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.get('/engineers', (req, res) => {
  res.send(data.engineers)
})

app.get('/clinets', (req, res) => {
  res.send(data.clients)
})

app.post('/clinet', (req, res) => {
  const { name } = req.body
  const newClinet = {
    name,
    status: 'active',
  }
  data.clinets.push(newClinet)
  res.status(200).send()
})

app.get('/principles', (req, res) => {
  res.send(data.principles)
})

app.listen(8080, () => console.log('listening on port 8080'))
