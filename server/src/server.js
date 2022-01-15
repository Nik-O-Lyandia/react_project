const fastify = require('fastify');
const { registerControllers } = require('./controllers');

const app = fastify({ logger: false });

app.register(require('fastify-cors'), {});
app.register(require('fastify-websocket'));

const start = async () => {
  registerControllers(app);
  try {
    const address = await app.listen(8000);
    console.log(`listening on ${address}...`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
