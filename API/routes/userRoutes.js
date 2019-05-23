const UserController = require('../controllers/UserController');

const userRoutes = [
    {
        method: 'POST',
        url: '/api/users',
        handler: UserController.getUser
    },
    {
        method: 'PUT',
        url: '/api/users',
        handler: UserController.addUser
        //schema: documentation.addUserSchema
    }
];
module.exports = userRoutes;