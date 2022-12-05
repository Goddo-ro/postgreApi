const express = require('express');
const userRoutes = require('./routes/person.routes');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log("Server was listening on port " + PORT);
});