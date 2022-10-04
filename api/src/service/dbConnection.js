const mongoose = require('mongoose');

async function connect() {
  const USER = process.env.MONGO_USER
	const PASSWORD = process.env.MONGO_PASS
	const CLUSTER = process.env.MONGO_CLUSTER
	const mongoURI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.mongodb.net/?retryWrites=true&w=majority`

  return await mongoose.connect(mongoURI)
    .then(db => console.log('Database connection established'))
    .catch(err => console.error(err))
}

module.exports = connect