const { verify, sign } = require('jsonwebtoken');

const loginUser = [
    { id: 1, fullName: 'user1', email: "user1@gmail.com", password: 123 },
    { id: 2, fullName: 'user2', email: "user2@gmail.com", password: 123 },
    { id: 3, fullName: 'user3', email: "user3@gmail.com", password: 123 },
]

module.exports = {
    getLogin: (req, res) => {
        res.send(loginUser);
    },

    getLoginUser: (req, res) => {
        try {
            const { email, password } = req.body;
            const fountUser = loginUser.find(e => e.email == email && e.password == password);
            if (fountUser) {
                res.send({
                    token: sign(fountUser.id, 'ok')
                })
            } else {
                res.status(400).send("Login yoki parol xato!!!")
            }
        } catch (error) {
            res.send(error)
        }
    },

    postUser: (req, res) => {
        try {
            const { fullName, email, password } = req.body;
            const obj = {
                id: loginUser.length === 0 ? 1 : loginUser[loginUser.length - 1].id + 1,
                fullName: fullName,
                email: email,
                password: password
            }
            loginUser.push(obj);
            res.status(200).send(obj);
        } catch (error) {
            res.send(error)
        }
    }
}