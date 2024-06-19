const express = require ('express')
const cors = require ('cors')
const db = require ('./database/index.js')

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello Rbk")
})

app.listen(port,()=>{
 console.log(`Server Listenning on port ${port}`)
})