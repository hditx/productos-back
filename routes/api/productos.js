const router = require('express').Router()
const { Producto } = require('../../db')

router.get('/', async (req, res) => {
    const productos = await Producto.findAll()
    res.json(productos)
})

router.get('/:id', async (req, res) => {
    const producto = await Producto.findByPk(req.params.id)
    res.json(producto)
})

router.post('/', async (req, res) => {
    const producto = await Producto.create(req.body)
    res.json(producto)
})

router.put('/:id', async (req, res) => {
    await Producto.update(req.body, {
        where: {id: req.params.productoId }
    })
    res.json({ success: 'Se modifico el producto' })
})

router.delete('/:id', async (req, res) => {
    await Producto.destroy({
        where: { id: req.params.id }
    })
    res.json({ success: 'Se elimino el producto' })
})

module.exports = router