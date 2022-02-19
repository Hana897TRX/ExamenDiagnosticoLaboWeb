const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const routerApi = require('./routes')
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('API Working')
})

routerApi(app)

app.listen(port, () => {
    console.log('API Working ' + port)
})