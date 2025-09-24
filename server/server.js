const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import ShoppingRouter  from './routes/shopping.router';
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for a xios requests
app.use(express.static('build'));
app.use (/api/shopping, ShoppingRouter)
/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
