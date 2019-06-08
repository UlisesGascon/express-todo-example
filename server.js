const express = require('express')
const path = require('path')
const engine = require('ejs-locals')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const { port } = require('./config')
const ctr = require('./controllers/todo')

const app = express()

app.set('port', port)
app.engine('ejs', engine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(logger('dev'))
app.use(methodOverride())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// Routes
app.get('/', ctr.index)
app.post('/create', ctr.create)
app.get('/destroy/:id', ctr.destroy)
app.get('/edit/:id', ctr.edit)
app.post('/update/:id', ctr.update)

if (app.get('env') == 'development') {
  app.use(errorHandler())
}

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'))
})
