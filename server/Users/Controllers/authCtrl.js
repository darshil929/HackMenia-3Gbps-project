const Models = require('../../Utils/allModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const model = new Models.Users();
        const user = await model.login(email);

        if (!user)
          return res.status(404).json({ error: "User does not exist." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(300).json({ message: "Invalid credentials." });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "12h",
        });
        delete user.password;

        res.header('x-auth-token', token);

        return res.status(200).json({ user, token, role: user.role });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: 'Internal server error', error });
    }
};

exports.register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body)
    const role = "user";

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new Models.Users(null, firstName, lastName, email, hashedPassword, role);
        const response = await user.save();

        console.log(response);
        return res.status(200).json({ message: "Registered Succesfully!" });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: 'Internal server error', error });
    }
};