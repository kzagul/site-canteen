const bodyParser = require('body-parser')
const app = require('express')()
app.use(bodyParser.json())

const support = require('./routes/support.js')
const home = require('./routes/home.js')

app.use('/support', support)
app.use('/home', home)

module.exports = app

if (require.main === module) {
  const port = 5000
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
