const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is invalid', (done) => {
        Recipe.create({name:10})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Milanesa a la napolitana' });
      });
      it('should throw an error if resume is null',(done)=>{
        Recipe.create({resume:20})
        .then(()=>done(new Error('It requires a valid resume')))
        .catch(()=>done());
      });
      it('Should work when its a valid resume',()=>{
        Recipe.create({resume:'A valid resume'});
      });
      it('Should throw an error if id doesnt exist',(done)=>{
        Recipe.create({})
        .then((done)=>(new Error('it requires a id')))
        .catch(()=>done());
      });
      it('Should work when id exist',()=>{
        Recipe.create({})
      })
    });
  });
});
