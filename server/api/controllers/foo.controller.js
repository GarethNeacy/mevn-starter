'use-strict';
const repo = require('../repositories/foo.repository');

async function getFoos(req, res) {
  const foos = await repo.getFoos();
  return res.send(foos);
}

module.exports = {
  getFoos,
};
