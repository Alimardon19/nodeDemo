const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const router = require('./router');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, ()=> {
    console.log(`${PORT} da ishlavotman`);
})
