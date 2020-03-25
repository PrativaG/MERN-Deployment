const UserCtl = require('../controllers/user.controller')

module.exports = app => {
    app.post("/api/users/register", UserCtl.register);
    app.post("/api/users/login", UserCtl.login);
    app.delete("/api/users/logout", UserCtl.logout);
}