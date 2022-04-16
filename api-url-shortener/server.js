const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv')
  .config();

const app = express();
const port = 3000;
const uri = process.env.MONGO_URI;
const website = require('./routes/website.route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/', website);

app.listen(port, () => {
  console.log(`Node.js listening at: ${port}...`);
});
mongoose.connect(uri, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection error', err);
  });
app.use('/public', express.static(`${process.cwd()}/public`));
