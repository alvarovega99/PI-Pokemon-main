const express = require('express')
const router = express.Router()
const axios = require('axios');
const { Pokemon, Type } = require('../db');





let pokemonId = [];
for (let i = 1; i <= 40; i++) {
    pokemonId.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}

router.get("/", async (req, res) => {
    const { name } = req.query;
    
    if (!name) {

        try {
            let pokemonsBd = await Pokemon.findAll({ include: [Type] });
            let arrayPeticiones = pokemonId.map((url) =>
                axios(url).then((e) => e.data)
            );
            arrayPeticiones = await Promise.all(arrayPeticiones);

            let pokemonsIniciales = arrayPeticiones.map((res) => {
                let obj = {
                    name: res.name,
                    img: res.sprites.other.dream_world.front_default,
                    atack: res.stats[1].base_stat,
                    hp: res.stats[0].base_stat,
                    types: res.types.map((t) => t.type),
                    id: res.id,
                };

                return obj;
            });

            res.status(200).send(pokemonsIniciales.concat(pokemonsBd));
        } catch (error) {
            res.send("No se encontró el Pokemon");
        }
    } else {
        try {

            const response = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
            if (name) {
                let pokemon = await response.data
                const obj = {
                    name: pokemon.name,
                    img: pokemon.sprites.other.dream_world.front_default,
                    atack: pokemon.stats[1].base_stat,
                    defense: pokemon.stats[2].base_stat,
                    hp: pokemon.stats[0].base_stat,
                    velocity: pokemon.stats[5].base_stat,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    types: pokemon.types.map((t) => t.type),
                    id: pokemon.id,
                };
                res.status(200).send(obj);

            }
        } catch (error) {
            //busqueda en base de datos
            try {
                let pokemon = await Pokemon.findOne({ where: { name: name }, include: [Type] });
                const objBd = {
                    id: pokemon.id,
                    name: pokemon.name,
                    img: pokemon.img,
                    hp: pokemon.hp,
                    atack: pokemon.atack,
                    defense: pokemon.defense,
                    velocity: pokemon.velocity,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    types: pokemon.types.map((t) => t),
                };
                res.status(200).send(objBd);
            } catch (error) {
                res.send('no hay resultados');
            }
        }
    }
})



router.get('/:id', async (req, res) => {
    const id = req.params.id;
    if (id.length > 4) {
        try {
            let pokemon = await Pokemon.findOne({ where: { id: id } })
            res.status(200).json(pokemon);
        } catch (error) {
            res.send("El id no pertenece a un pokemon creado ");
        }
    }
    else {
        try {

            let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            let response = await axios(url);
            let pokemon = response.data;
            const obj = {
                name: pokemon.name,
                img: pokemon.sprites.other.dream_world.front_default,
                atack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                hp: pokemon.stats[0].base_stat,
                velocity: pokemon.stats[5].base_stat,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.types.map((t) => t.type),
                id: pokemon.id,
            };
            res.status(200).send(obj);

        } catch (error) {
            res.send('No se encontro el id solicitado');
        }
    }
})








/* router.get('/:name', async (req, res) => {
    let namePokemon = req.params.name;
    let url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
    try {
        let response = axios(url)
        let pokemon = response.data
        let obj = {
            nombre: pokemon.name,
            img: pokemon.sprites.other.dream_world.front_default,
            ataque: pokemon.stats[1].base_stat,
            types: pokemon.types.map((t) => t.type),
            id: pokemon.id,
        };



    } catch (error) {
        let busquedaBd = await Pokemon.findOne({
            where:
                { nombre: namePokemon },
        })
            .then(pokemon => {
                if (Pokemon) {
                    res.status(200).send(busquedaBd);
                } else {
                    res.send(error.message);
                }
            }
            )
    }

}) */

router.post('/', async (req, res) => {
    const { name, img, life, atack, defense, speed, height, weight, types } = req.body;
    nameMin = name.toLowerCase();
    try {
        let validarPokemon = await Pokemon.findOne({
            where: {
                name: nameMin
            }
        })
        if (!validarPokemon) {
            const newPoke = await Pokemon.create(
                {
                    name: nameMin,
                    img: img,
                    hp: life,
                    atack: atack,
                    defense: defense,
                    velocity: speed,
                    height: height,
                    weight: weight,
                }
            )
            if (!types.length) types = [1];

            await newPoke.setTypes(types);

            return res.status(200).send('Pokemon Creado correctamente');
        } else {
            res.send("El pokemon ya existe")
        }

    } catch (error) {
        res.status(400).send('error al crear el pokemon');
    }




})





module.exports = router;