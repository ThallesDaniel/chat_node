const { WebSocketServer } = require("ws")
const dotenv = require("dotenv")

dotenv.config()

//verifica se possui a porta "PORT" nas variaveis de ambiente, caso contrário inicia na
const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) => {
    ws.on("error", console.error)

    ws.on("message", (data) => {
        wss.clients.forEach((client) => client.send(data.toString()))
    })

    console.log("Client successfully connected!!!")
})