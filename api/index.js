// iniciar server
const app = require('./src/app')
const connectDB = require('./src/service/dbConnection')

async function runServer() {
  const PORT = process.env.PORT || 3000
  await connectDB()
  app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`);
  });
}

runServer();