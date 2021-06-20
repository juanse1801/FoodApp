/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
  resume: 'Valid resume'
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', async() =>
      await agent.get('/recipes').expect(200)
    );
  });

  describe('GET /:id',()=>{
    it('responds with 404 if the recipe doesnt exist',()=>{
      agent.get('/recipes/1234567')
      .expect(404)
    })
  })

  describe('POST /recipe',()=>{
    it('responds with 404 if the recipe post OK',()=>{
      agent.post('/recipe',{name:'Salchipapa',resume:'Salchicha con papa'})
      .expect(200)
    })
  })
});
