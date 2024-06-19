const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shop"
}).promise()

connection.connect().then(() => {
    console.log("Data base shop connect with succssefuly")
}).catch((error) => {
    console.log(error)
})