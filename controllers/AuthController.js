const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

const salt = bcrypt.genSaltSync(10);

const register = async (req, res) => {
    try {
        console.log('body', req.body);
        const { username, password } = req.body;
        const user = await User.create({ username, 
            password : bcrypt.hashSync(password, salt)
        });
        res.status(201).end('User created');
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { register };