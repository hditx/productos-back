const Sequelize = require('sequelize')
const ProductoModel = require('./models/productos')
const sequelize = new Sequelize('producto_api', 'toto', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

const Producto = ProductoModel(sequelize, Sequelize)

sequelize.sync({ force: false }).then(() => console.log('sincronizado'))
module.exports = {
    Producto
}