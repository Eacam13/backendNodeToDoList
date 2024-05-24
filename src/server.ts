import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    const port = process.env.PORT || 3333;
    await app.listen({ port: Number(port), host: '0.0.0.0' });
    console.log(`Server is running at http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();


