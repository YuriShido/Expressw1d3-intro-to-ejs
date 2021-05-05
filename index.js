const express = require('express')
const path = require('path')
const mainRoutes = require('./routes/main-routes')

//setup
const app = express()
app.set('view engine','ejs' )
app.set('views', 'views')
//Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

//Router
app.use(mainRoutes)

//server starts
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server has stated pn port ${PORT}....`))