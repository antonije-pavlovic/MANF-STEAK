const boom = require('boom');
const User = require('../models/User');

exports.login = async (req,res) => {
    try{
        //login
    }catch (e) {
        throw boom.boomify(e);
    }
};

exports.register = async (req,res) => {
    try{
        //register
    }catch (e) {
        throw boom.boomify(e);
    }
};