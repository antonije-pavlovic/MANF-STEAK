const boom = require('boom');
const User = require('../models/User');

exports.getUser = async (request,replay) => {
    try{
      //  console.log(request.body)
        let params = request.body;
        let username = params.username;
        let password = params.password;
        let user = await User.find({'username':username,'password':password});
        return user;
    }catch (e) {
        throw boom.boomify(e);
    }
};

exports.addUser = async (request,replay) => {
   try {
       let user = new User(request.body);
       return user.save();
   }catch (e) {
       throw boom.boomify(e);
   }
};