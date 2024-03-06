import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();

// Ruta para mostrar todos los productos
app.get('/productos', async (req, res) => {
    const productos = new ProductManager("products.json");
    const limit = req.query.limit;
    let productosList = await productos.getProducts(limit);
    res.json(productosList);
});

// Ruta para mostrar un producto por su ID
app.get('/productos/:pid', async (req, res) => {
    const id = parseInt(req.params.pid);
    const productos = new ProductManager("products.json");
    const producto = await productos.getProductById(id);
    res.json(producto);
});





const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});