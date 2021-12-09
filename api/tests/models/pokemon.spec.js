const { Pokemon, Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    describe('Validators', () => {
      beforeEach(() => Pokemon.sync({ force: true }));
      describe('name', () => {
        it('Deberia retornar error si le paso null', (done) => {
          Pokemon.create({})
            .then(() => done(new Error('It requires a valid name')))
            .catch(() => done());
        });
        it('Deberia trabajar bien si le paso un nombre', () => {
          Pokemon.create({ name: 'Pikachu' });
        });
      });
    });
    describe('Validators', () => {
      beforeEach(() => Type.sync({ force: true }));
      describe('name', () => {
        it('Deberia retornar error si le paso null', (done) => {
          Type.create({})
            .then(() => done(new Error('It requires a valid name')))
            .catch(() => done());
        });
        it('Deberia trabajar bien si le paso un nombre', () => {
          Type.create({ name: 'electric' });
        });
      });
    });

});


