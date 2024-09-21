const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port = 3019;
const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/you', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("Mongodb connection successful");
});

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    gender: String
});

const Users = mongoose.model("Users", userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/post', async (req, res) => {
    const { firstName, lastName, email, phone, gender } = req.body;

    const user = new Users({
        firstName,
        lastName,
        email,
        phone,
        gender
    });

    await user.save();
    console.log(user);
    res.send("Registration Successful");
});

app.listen(port, () => {
    console.log(`Server started `);
});