const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = 3000

const {
    mongoose
} = require('./database')

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}))

app.use('/libro', require('./routes/libroRoutes'))
app.use('/lector', require('./routes/lectorRoutes'))
app.use('/autor', require('./routes/autorRoutes'))
app.use('/prestamo', require('./routes/prestamoRoutes'))

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})