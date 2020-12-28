module.exports = (sequelize, type) => {
    return sequelize.define('producto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        descripcion: type.STRING,
        imagen: type.STRING
    })
}