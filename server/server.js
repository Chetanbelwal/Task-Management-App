import app from './app.js'
import connectToDb from './utils/db.js'

// Define port and start server
const PORT = process.env.PORT || 5000;


connectToDb().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  });