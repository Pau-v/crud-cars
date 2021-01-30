'use strict'

const { disconnect } = require('mongoose');
//Aquí requerimos el modulo previamente instalado SUPERTEST, lo almacenamos en una constante llamada REQUEST, por que será este modulo el que haga por nosotros las peticiones
const request = require('supertest');
//Aquí vamos a necesitar para hacer las peticiones nuestra configuracion de app en index, entonces recordar exportar a app y despues requerirla aqui.
const app = require('../src/server');

/* Testing get all tasks */
//Cuando testeemos, vamos a usar dos palabras reservadas llamadas DESCRIBE e IT, la funcion de estas palabras es simplemente mostrarnos mensajes por consola de lo que va sucediendo
describe('GET/user', () => {
    //Aquí decimos, IT/esto deberia responder con un listado de todas las tareas. Despues le añadimos un callback llamado DONE, ya que llevará un tiempo procesar la operación
    it('should response a list of all users', done => {
        //Aquí hacemos el uso de supertest con la constante donde tenemos almacenada la funcion de supertest y que ejecute en app
        request(app)
            //Metodo GET y ruta que queremos testear
            .get('/users')
            //Aquí va siempre palabra reservada SET y le decimos que va a recbiir archivos JSON
            .set('Accept', 'application/json')
            //Aunque parezca redundante, tambien hay que poner expect(esperamos), esperamos recibir un contenido de tipo JSON. 
            .expect('Content-Type', /json/)
            //Palabra reservada expect y decinmos que esperamos un codigo 200(este codigo indica que la conexion fue OK)
            .expect(200, done);
    });
});

//PARA TESTEAR ESTO, DEBIMOS IR AL CONTROLADOR Y COLOCAR EN LA FUNCION, UN ID Y AQUI EL MISMO ID, PARA COMPROBAR QUE FUNCIOAN CORRECTAMENTE
describe('GET/user/:id', () => {
    //Aquí decimos, IT/esto deberia responder con un listado de todas las tareas. Despues le añadimos un callback llamado DONE, ya que llevará un tiempo procesar la operación
    it('should response an only user', done => {
        //Aquí hacemos el uso de supertest con la constante donde tenemos almacenada la funcion de supertest y que ejecute en app
        request(app)
            //Metodo GET y ruta que queremos testear con su id
            .get('/users/00001')
            //Aquí va siempre palabra reservada SET y le decimos que va a recbiir archivos JSON
            .set('Accept', 'application/json')
            //Aunque parezca redundante, tambien hay que poner expect(esperamos), esperamos recibir un contenido de tipo JSON. 
            .expect('Content-Type', /json/)
            //Palabra reservada expect y decinmos que esperamos un codigo 200(este codigo indica que la conexion fue OK)
            .expect(200, done);
    });

    //AQUI QUEREMOS TESTEAR QUE NO EXISTA UN USER Y QUE NOS DEVULEVA CORRECTAMENTE EL MENSAJE DE ERROR
    it('should response an only user that doesn´t exists', done => {
        //Aquí hacemos el uso de supertest con la constante donde tenemos almacenada la funcion de supertest y que ejecute en app
        request(app)
            //Metodo GET y ruta que queremos testear con su id no valido, despues de user/podemos poner lo que nosotros queramos, ya que no existe tal id
            .get('/users/idError')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            //Aqwui deberiamos poner el mismo mensaje que tenemos en nuestro errro, si usuario no existe
            .expect('User not found')
            //Para finalizar le podemos poner simplemente .end(done) o todo lo que tenemos abajo
            .end((err) => {
                if(err) return done(err);
                done();
            });
    });
});

describe('POST/user', () => {
    it('should responsed user created', done => {
        const data = {
            username: 'fisfas',
            password: 'fusfis'
        }

        request(app)
            //Aqui debemos poner nuestra ruta tal cual la tenemos en el controlador
            .post('/users')
            .send(data)
            .set('Acecept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('should reponsed with 400/bad request', done => {
        const data = {}
        request(app)
            .post('/users')
            .send(data)
            .set('Acecept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            //Aqui hay que recordar que tiene que ser el mismo mensaje que tengamos en nuestro controlador, en el caso de error
            .expect('user no created')
            .end((err) => {
                if (err) return done(err);
                done(err)
            })
    });
});