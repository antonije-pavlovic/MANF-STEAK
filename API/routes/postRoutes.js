const Post = require('../controllers/PostController');

const postRoutes = [
    {
        method: 'GET',
        url: '/api/posts',
        handler: Post.getPosts
    },
    {
        method: 'GET',
        url: '/api/posts/:id',
        handler: Post.getSinlePost
    },
    {
        method: 'POST',
        url: '/api/posts',
        handler: Post.addPost
    },
    {
        method: 'PUT',
        url: '/api/posts/:id',
        handler: Post.updatePost
    },
    {
        method: 'DELETE',
        url: '/api/posts/:id',
        handler: Post.deletePost
    }
];
module.exports = postRoutes;