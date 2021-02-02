'use strict'

const request = require('supertest');
const app = require('../src/server');

let testServer
//El before all, es para que antes de que todo el proceso de pruebas se inicie, arranque el servidor//TAMBIEN SE PUEDE USAR EL beforeEach()
beforeAll(() => {
    testServer = app.listen(3000)
})

//Aquí decimos que despues de que todas las pruebas se realicen, cierra el servidor
afterAll(() => {
    testServer.close(done)
})

describe('GET /users', () => {
    it('should return all users', async () => {
        const response = await request(app).get('/users')

        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        expect(response.body.body).not.toBeNull()
        expect(Array.isArray(response.body.body)).toBe(true)
        //Aqui pondremos dentro del toBe, el numero de usuarios que tenemos, a modo de prueba solamente
        expect(response.body.body.length).toBe()
    })
})

describe('GET/users/:id', () => {
    it('should GET a exercise', async () => {
        const response = await response(app).get('/users/1')

        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        expect(response.body.body).not.toBeNull()
        //Aqui pondremos dentro de la funcion toBe el numero de id del usuario que queramos comprobar
        expect(response.body.body.id).toBe(1)
    })
})


//ALMACENAR APP.LISTEN EN UNA CONSTANTE LLAMANDA SERVER Y EXPORTARLA