const posts = require('./postRoutes');
const users = require('./userRoutes');
const auth = require('./authRoutes');

let routes = [];
routes.push(...posts);
routes.push(...users);
routes.push(...auth);

module.exports = routes;