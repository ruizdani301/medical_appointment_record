// iniciar server
import app from './src/config.js';
import connectDB from './src/service/dbConnection.js';

async function runServer() {
  const PORT = process.env.PORT || 3000
  await connectDB()
  app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`);
  });
}

runServer();