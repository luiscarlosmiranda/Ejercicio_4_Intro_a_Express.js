const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/', (req, res) => {
    res.status(200).json({ mensaje: 'hola mundo' });
});

app.post('/api/suma', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const resultado = num1 + num2;
    res.status(200).json({ resultado });
});

app.get('/api/usuario/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.status(200).json({ usuario: nombre });
});

app.get('/api/swapi/:id', async (req, res) => {
    const fetch = (await import('node-fetch')).default;
    const id = req.params.id;
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data = await response.json();
    res.status(200).json({ personaje: data });
});

app.put('/api/body', (req, res) => {
    const body = req.body;
    res.status(200).json(body);
});

app.delete('/api/objeto/:id', (req, res) => {
    const id = req.params.id;
    if (id === '3') {
        res.status(200).json({ mensaje: 'se ha eliminado el objeto con ID 3' });
    } else {
        res.status(404).json({ mensaje: 'No se encontró el objeto con el ID especificado' });
    }
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});