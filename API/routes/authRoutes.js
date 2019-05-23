const Auth = require('../controllers/AuthController');

const authRoutes = [
    {
        method: 'POST',
        url: '/api/login',
        handler: Auth.login
    },
    {
        method: 'POST',
        url: '/api/register',
        handler: Auth.register
    }
];
module.exports = authRoutes;