const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/person.routes');
const postRoutes = require('./routes/post.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log("Server was listening on port " + PORT);
});
