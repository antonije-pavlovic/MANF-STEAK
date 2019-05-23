const UserController = require('../controllers/UserController');

const routes =[
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
module.exports = routes;