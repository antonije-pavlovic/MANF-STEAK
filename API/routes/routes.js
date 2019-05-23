const posts = require('./postRoutes');
const users = require('./userRoutes');

let routes = [];
routes.push(...posts);
routes.push(...users);

module.exports = routes;