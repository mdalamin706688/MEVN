const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
)
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api',require('./routes/user.route'))
app.use(express.static('public'))
const port = process.env.PORT | 80
app.listen(port)