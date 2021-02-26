const handleProfile = (req, res, db) => {
    const {
        id
    } = req.params;
    db
        .select('*')
        .from('users')
        .where({
            id
        })
        .then(user => {
            if (user.length) {
                res.json(user[0]);
            } else {
                res.status(400).json('There is no such user found');
            }
        })
};

module.exports = {
    handleProfile: handleProfile
}