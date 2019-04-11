const express = require('express')
const bodyParser = require('body-parser') // converts the body of incoming requests into JSON objects.
const cors = require('cors') // configures Express to add headers stating that your API accepts requests coming from other origins. This is also known as Cross-Origin Resource Sharing (CORS).
const helmet = require('helmet') // secures Express apps with various HTTP headers.
const morgan = require('morgan') // adds some logging capabilities to the Express app
const jwt = require('express-jwt') // A middleware that validates a JSON Web Token (JWT) and set the req.user with its attributes.
const jwksRsa = require('jwks-rsa') // A library to retrieve RSA public keys from a JWKS (JSON Web Key Set) endpoint.

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

app.get('/principles', (req, res) => {
  res.send(data.principles)
})

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_CLIENT_ID,
  issuer: `https://${process.env.AUTH0_DOMAIN}`,
  algorithms: ['RS256'],
})

app.post('/clinet', checkJwt, (req, res) => {
  const { name } = req.body
  const newClinet = {
    name,
    status: 'active',
  }
  data.clients.push(newClient)
  res.status(200).send()
})

app.listen(8080, () => console.log('listening on port 8080'))
