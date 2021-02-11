const mongoose = require('mongoose');

require('dotenv').config();

describe('Customer CRUD',() => {

    beforeAll(async () => {
           
        connection = await mongoose.connect('mongodb://localhost:27017/test_'+process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true });
        db = mongoose.connection;
        const collection = process.env.COLLECTION;
        await db.createCollection(collection);
     });
     afterAll(async () => {
        const collection = "test_"+process.env.COLLECTION;
        await db.dropCollection(collection);
        await db.dropDatabase();
        await db.close();
        await connection.close();
     });
});
