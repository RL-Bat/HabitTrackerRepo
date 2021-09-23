const request = require('supertest');
const server = 'http://localhost:3000';

const mongoose = require('mongoose');
const databaseName = 'test';
const User =require('../models/userModels')

describe('Route integration', () => {
  //login page
  describe('/', () => {
    describe('GET', () => {
      it('responds with a 200 status and a hmtl', () => {
        request(server)
          .get('/')
          .expect(200)
          .expect('Content-type', /text\/html/);
      });
    });

    //interview page
    describe('/database', () => {
      describe('GET', () => {
        it('responds with a 200 status and a json object', () =>
          request(server)
            .get('/database')
            .expect(200)
            .expect('Content-type', /application\/json/));
      });
    });
  });
});

beforeAll(async () => {
  const url =
    'mongodb+srv://ChaoY:Codesmith@cluster0.zjvee.mongodb.net/tracker?retryWrites=true&w=majority';
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'test',
    })
    .then(() => console.log('Connected to test DB'))
    .catch((err) => console.log(err));
});
