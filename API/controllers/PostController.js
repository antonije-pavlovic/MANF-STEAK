const Post = require('../models/Post');
const boom = require('boom');

exports.getPosts = async (req, res) => {
    try {
        console.log('doso');
        let posts = await Post.find();
        return posts;
    }catch (e) {
        throw boom.boomify(e);
    }
};

exports.getSinlePost = async (req,res) => {
    try {
        let id = req.params.id;
        let post = await Post.findById(id);
        return post;
    }catch (e) {
        throw boom.boomify(e);
    }
};

exports.addPost = async (req,res) => {
    try {
        let post = new Post(req.body);
        return post.save();
    }catch (e) {
        throw boom.boomify(e);
    }
};

exports.updatePost = async  (req,res) => {
    try {
         let id = req.params.id;
         let post = req.body;
         const { ...updateData } = post;
         let update = Post.findByIdAndUpdate(id, updateData, { new:true });
        return update;
    }catch (e) {
        throw boom.boomify(e);
    }
};

exports.deletePost = async (req,res) => {
    try {
        let id = req.params.id;
        let removed = Post.findByIdAndRemove(id);
        return removed;
    }catch (e) {
        throw boom.boomify(e);
    }
};
