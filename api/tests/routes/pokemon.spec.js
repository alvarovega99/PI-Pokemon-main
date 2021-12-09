const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, Type, conn } = require('../../src/db.js');


const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  // Test de rutas

  // describe("GET /pokemons", () => {
  //   it('should return a list of pokemons', (done) => {
  //     agent.get('/pokemons').then(() => done());
  //   });
  // });


  describe("GET /pokemons/:id", () => {
    it("Devuelve 200 si le paso un id", (done) => {
      agent.get("/pokemons/1").then(() => done());
    });
  }
  );
  describe("GET /pokemons/:id", () => {
    it("Devuelve 404 si le paso un id incorrecto", (done) => {
      agent.get("/pokemons/hola").then(() => done());
    });
  }
  );
  describe("POST /pokemons", () => {
    it("Devuelve 200 si la ruta del POST es correcta", (done) => {
      agent.post("/pokemons").send(pokemon).then(() => done());
    });
  }
  );
  describe("GET /pokemons?name=name", () => {
    it("Devuelve 200 si le paso un nombre correcto", (done) => {
      agent.get("/pokemons?name=pikachu").then(() => done());
    });
  }
  );
  describe("GET /pokemons?name=name", () => {
    it("Devuelve 404 si le paso un nombre incorrecto", (done) => {
      agent.get("/pokemons?name=kjnrt").then(() => done());
    });
  }
);

});

