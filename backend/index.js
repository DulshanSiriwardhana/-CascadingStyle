const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(error => console.log(error));

const AdminRouter = require('./routes/Admin');
app.use('/Admin', AdminRouter);

const UserRouter = require('./routes/User');
app.use('/User', UserRouter);

const PORT = process.env.PORT || 4000;-

app.listen(PORT, () => {
    console.log(`Server is up and running on the port ${PORT}`);
});