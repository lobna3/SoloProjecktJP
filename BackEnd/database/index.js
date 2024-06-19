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
        const sql = "select * from `job` ORDER BY id DESC"
        return connection.query(sql)
    },
    add: function (name, descreption, category, city,email) {
        const sql = "insert into `job` (name,descreption,category,city,email) values(?,?,?,?,?)"
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
        const sql = "delete from `job` where id = ?"
        return connection.query(sql, id)
    },
    update: function (name, descreption,  category, city,email,id) {
        const sql = "update `job` set name=?,descreption=?,category=?,city=? , email=? where id=?"
        return connection.query(sql, [name, descreption,  category, city, email,id])
    },

    getByCity: function (city) {
        const sql = "select * from `job` where city = ?"
        return connection.query(sql, city)
    }

}