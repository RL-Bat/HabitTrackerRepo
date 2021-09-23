const request = require('supertest');
const server = 'http://localhost:3000';
const express = require('express');
const mongoose = require('mongoose');
const databaseName = 'test';
const User = require('../models/habitModels');


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

      describe('/', () => {
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

describe('Database functionality', () => {
  //
  beforeAll(async () => {
    const url =
      'mongodb+srv://ChaoY:Codesmith@cluster0.zjvee.mongodb.net/habitApp?retryWrites=true&w=majority';
    await mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'habitcards',
      })
      .then(() => console.log('Connected to test DB'))
      .catch((err) => console.log(err));
  });

  // afterEach(async () => {
  //   await User.deleteMany();
  // });

  it('Create new user', async () => {
    const res = await request(server)
      .post('/database/checkUser?user_id=123&name=test&email=testing@gmail.com')
      .send({ user_id: '123', name: 'Test', email: 'testing@gmail.com' })
     .expect(User.findOne({ email: 'testing@gmail.com' })).toBe();
  });

  it('Return a user', () => {
    request(server)
      .get('database/?user_id=123')
      .expect(200)
      .expect('Content-type', /application\/json/)
      .expect(res.body.user_id).toBe()
  });

});
