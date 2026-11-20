// Carregnado modulos
    const express = require('express')
    const { engine } = require('express-handlebars') //const handlebars = require('express-handlebars')
    const bodyParser = require("body-parser")
    const app = express()
    const admin = require("./routes/admin")
    //const mongoose = require("mongoose")

// Configuraçoes
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', engine({ defaultLayout: 'main' }))
        app.set('view engine', 'handlebars')
    // Mongoose


// Rotas
    app.use('/admin', admin)
// Outros
const PORT = 8081
app.listen(PORT,() => {
    console.log("Servidor Rodando! \nhttp://localhost:8081/admin ");
})