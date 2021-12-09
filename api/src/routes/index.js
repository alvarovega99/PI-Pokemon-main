const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemon_router = require('./pokemons.js')
const types_router = require('./types.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemon_router)
router.use('/types', types_router)


module.exports = router;
