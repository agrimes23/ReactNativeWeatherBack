const express = require('express');
const weatherRoutes = require('./src/routes');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const port = 3000

let corsOptions = {
   origin : ['http://localhost:3000'],
}

app.use(cors(corsOptions))
app.use(express.json());


app.get('/', cors(corsOptions), (req, res) => {
    res.send("hello")
})


app.use('/api/v1/weather', cors(corsOptions), weatherRoutes);


app.listen(port, () => console.log(`app listening on port ${port}`))