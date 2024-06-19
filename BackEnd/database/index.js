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

module.exports = {
    getAll: function () {
        const sql = "select * from `job`"
        return connection.query(sql)
    },
    add: function (name, descreption, category, city,email) {
        const sql = "insert into `product` (name,descreption,category,city,email) values(?,?,?,?,?)"
        return connection.query(sql, [name, descreption, category, city, email])
    },
    getById: function (id) {
        const sql = "select * from `job` where id = ?"
        return connection.query(sql, id)
    },
    getByName: function (name) {
        const sql = "select * from `job` where name = ?"
        return connection.query(sql, name)
    },
    getByCategory: function (category) {
        const sql = "select * from `job` where category = ?"
        return connection.query(sql, category)
    },
    deleteP: function (id) {
        const sql = "delete from `product` where id = ?"
        return connection.query(sql, id)
    },
    update: function (name, descreption, price, category, imageUrl,id) {
        const sql = "update `product` set name=?,descreption=?,price=?,category=?,imageUrl=? where id=?"
        return connection.query(sql, [name, descreption, price, category, imageUrl,id])
    },

}