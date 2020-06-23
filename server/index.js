const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

// Routes
const foos = require('./api/routes/foo.router');
app.use('/api/foo', foos);

// prod
if (process.env.NODE_ENV === 'production') {
  // static
  app.use(express.static(__dirname + '/public/'));
  // handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(port, () => console.log(`Server started on port ${port}`));
