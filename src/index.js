const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/bordados_app_backend', require('./routes'));

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
