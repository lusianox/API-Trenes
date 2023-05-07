const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const trenes = require('../trenes.json');


router.get('/', (req, res) => {
    res.json(trenes);
})

router.post('/', (req, res) => {
    const {Marca, Pais, Servicio} = req.body;
    if (Marca && Pais && Servicio) {
        const id = trenes.length + 1;
        const nuevoTren = {id, ...req.body};
        trenes.push(nuevoTren);
        res.json(trenes);
    } else {
        res.status(500).json({error: 'Ocurrió un error'});
    }
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {Marca, Pais, Servicio} = req.body;
    if (Marca && Pais && Servicio) {
        _.each(trenes, (tren, i) => {
            if (tren.id == id) {
                tren.Marca == Marca;
                tren.Pais == Pais;
                tren.Servicio == Servicio;
            }
        });
        res.json(trenes);
    } else {
        res.status(500).json({error: 'Ocurrió un error'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(trenes, (tren, i) => {
        if (tren.id == id) {
            trenes.splice(i, 1);
        }
    });
    res.send(trenes);
});

module.exports = router;