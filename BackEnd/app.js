const express = require ('express')
const cors = require ('cors')
const db = require ('./database/index.js')
const {getAll,getById,getByCategory,getByName,add,deleteP,update,getByCity} = require('./database/index.js')

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Solo Projejt")
})

app.get("/api/jobs", (req, res) => {
    getAll().then(([results]) => {
        res.json(results)
    })
    .catch((error) => { res.status(500).send(error) })
})

app.post("/api/jobs", (req, res) => {
    const name = req.body.name
    const descreption = req.body.descreption
    const category = req.body.category
    const city = req.body.city
    const email = req.body.email
    add(name, descreption ,category,city, email).then(([results]) => {
        res.status(201).json(results)
    })
    .catch((error) => { res.status(500).send(error) })
})

app.get('/api/jobs/:id', (req, res) => {
    const id = req.params.id
    getById(id).then(([results]) => {
        res.status(201).json(results)
    })
    .catch((error) => { res.status(500).send(error) })
})

app.get('/api/jobs/name/:name', (req, res) => {
    const name = req.params.name
    getByName(name).then(([results]) => {
        res.status(201).json(results)
    })
    .catch((error) => { res.status(500).send(error) })
})

app.get('/api/jobs/category/:category', (req, res) => {
    const category = req.params.category
    getByCategory(category).then(([results]) => {
        res.status(201).json(results)
    })
    .catch((error) => { res.status(500).send(error) })
})

app.get('/api/jobs/city/:city', (req, res) => {
    const city = req.params.city
    getByCity(city).then(([results]) => {
        res.status(201).json(results)
    })
    .catch((error) => { res.status(500).send(error) })
})

app.delete('/api/jobs/:id', (req, res) => {
    const id = req.params.id
    deleteP(id).then(([results]) => {
        res.status(201).json(results)
    })
    .catch((error) => { res.status(500).send(error) })
})

app.put("/api/jobs/:id", (req, res) => {
    const name = req.body.name
    const descreption = req.body.descreption
    const category = req.body.category
    const city = req.body.city
    const email = req.body.email
    const id = req.params.id
    update(name, descreption, category, city,email,id).then(([results]) => {
        res.status(201).json(results)
    })
    .catch((error) => { res.status(500).send(error) })
})
app.listen(port,()=>{
 console.log(`Server Listenning on port ${port}`)
})