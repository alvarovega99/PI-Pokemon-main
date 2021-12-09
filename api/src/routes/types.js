const express = require('express')
const router = express.Router()
const { Type } = require('../db.js')

const axios = require('axios');
const { response } = require('express');


router.get('/', async (req, res) => {

    try {
        const types = await Type.findAll({
            attributes: ['id', 'name']
        })

        if (types.length !== 0) {
            res.status(200).send(types)
        } else {
            const tipos = []
            await axios('https://pokeapi.co/api/v2/type/')
                .then((response) => response.data)
                .then((data) => {

                    for (let i = 0; i < data.results.length; i++) {
                        let tipo = data.results[i];
                        tipos.push(tipo);

                    }

                })

            tipos.map(async (name) => {
                try {
                    await Type.create({
                        name: name.name,
                    });
                    res.status(200).json(tipos)
                } catch (error) {
                    res.status(400).send(error.message);
                }
            });
        }

    }catch (error) {
        res.status(400).send(error.message);
    }
})




module.exports = router;


/* tipos.map(async (name) => {
    try {
        await Type.create({
            name: name.name,
        });
    } catch (error) {
        console.log(error);
    }
});
res.send(tipos)
 */


/* try {

    const tipos = []
    await axios('https://pokeapi.co/api/v2/type/')
        .then((response) => response.data)
        .then((data) => {

            for (let i = 0; i < data.results.length; i++) {
                let tipo = data.results[i];
                tipos.push(tipo);

            }

        })

tipos.map(async (name) => {
    try {
        await Type.create({
            name: name.name,
        });
    } catch (error) {
        console.log(error);
    }
});
res.send(tipos)




} catch (error) {
    res.status(500).send('No se pudo acceder a los tipos')
} */