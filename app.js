const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//local module - to handle routing request to page
const router = require('./route/routes')
app.use(router)

//-- running server middleware --//
const port = 3000
app.listen(process.env.PORT || port , (err) => {
  if(err)
    console.log('Unable to start the server!')
else
    console.log('Server started running on : ' + port)
})

