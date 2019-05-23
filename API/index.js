const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog')
    .then(() => console.log('connected to datanase'))
    .catch(err => console.error(err));
const fastify = require('fastify')({
    logger:true
});

fastify.get('/',async (request, reply) => {
    return { hello: 'world'}
})

const  start = async () => {
    try{
        fastify.listen(3000);
        fastify.log.info('listening on port 3000')
    }catch (e) {
        fastify.log.error(e);
        process.exit(1);
    }
};

start();