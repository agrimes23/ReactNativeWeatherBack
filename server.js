const express = require('express');
const weatherRoutes = require('./src/routes');
const app = express();
const port = 3000


app.get('/', (req, res) => {
    res.send("hello")
})


app.use('/api/v1/weather', weatherRoutes);


app.listen(port, () => console.log(`app listening on port ${port}`))