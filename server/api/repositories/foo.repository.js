'use-strict';

const mongodb = require('mongodb');

// Create a single connection once during server startup and use it in all repo files
async function getCollection() {
  const connectionString = process.env.MONGO_CONNECTION_STRING;
  const client = await mongodb.MongoClient.connect(connectionString, {
    useNewUrlParser: true,
  });
  return client.db(process.env.MONGO_DBNAME).collection('foos');
}

async function getFoos() {
  const collection = await getCollection();
  return collection.find().toArray();
}

module.exports = {
  getFoos,
};
