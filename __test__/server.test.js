'use strict';
const server = require('../src/server.js');
const supertest = require("supertest");
const request = supertest(server.app);

describe('Testing server', () => {
    it("getting data from home route /", async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("Hello From the home!");
    });
it ('getting data from /person route', async () => {
    const response= await request.get('/person?name=ahmad');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
})
it ('testing the notFound 404 middleware', async () => {
    const response= await request.get('/notFound');
    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('page not found');
})
it ('testing the serverError 500 middleware if there is no name', async () => {
    const response= await request.get('/person?name=');
    expect(response.status).toEqual(500);
    expect(response.body.message).toEqual('Server Error: name is empty');
})
});