'use-strict'
const mongodb = require('mongodb');

async function loadRoomsCollection(){
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://spotify-party:ELl4o18RGsqvDgSU@spotify-party-dda9g.mongodb.net/test?retryWrites=true', {
      useNewUrlParser: true
    }
  );
  return client.db('spotify-party').collection('rooms');
}

async function getRooms(req, res) {
  const repo = await loadRoomsCollection();
  res.send(await repo.find({}).toArray());
}

async function getRoom(req, res) {
  const repo = await loadRoomsCollection();
  const room = await repo.findOne({code: req.params.roomCode});
  res.send(room);
}

async function createRoom(req, res) {
  const repo = await loadRoomsCollection();
  const inserted = await repo.insertOne({
    code: Math.random()
      .toString(36)
      .replace('0.', '')
      .slice(0, 4)
  });
  res.send(inserted.ops[0]);
}

module.exports = {
  getRooms,
  getRoom,
  createRoom
};
