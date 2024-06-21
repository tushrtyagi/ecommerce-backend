const dotenv = require('dotenv');
const connectDB = require('./utils/db');


dotenv.config({ path: './.env' });


connectDB();

const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
