
const user = [
    {id: 1, name: 'Axror'},
    {id: 2, name: 'Sharif'},
    {id: 3, name: 'Shoxrux'},
]

module.exports = {

    allUsers: (req, res) => {
        res.send(user)
    },

    postUsers: (req, res) => {
        if (req.body.name) {
            let obj = {
                id:  user.length === 0 ? 1 : user[user.length - 1].id + 1,
                name: req.body.name
            }
            user.push(obj);
            res.status('200').send(obj);
        }else {
            return res.status('404').send(`name yuborilmagan`)
        }
    },

    putUsers: (req, res)=> {
        const result = user.find(e => e.id == req.params.id);
        if (!result) {
            return res.status('404').send("Berilgan Id topilmadi")
        }
        result.name = req.body.name;
        res.status('200').send(result);
    },

    deleteUsers: (req, res)=> {
        const result = user.find(e => e.id == req.params.id);
        if (!result) {
            return res.status('404').send("Berilgan Id topilmadi")
        }
        const userIndex = user.indexOf(result)
        user.splice(userIndex, 1);
        res.status('200').send(result);
    }
}