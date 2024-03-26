import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';
import mongoose from 'mongoose';

const app = Fastify({ logger: true });

// @ts-ignore
mongoose.connect('mongodb://localhost:27017/meu_banco_de_dados', { useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
    // Após a conexão ser estabelecida, registre os plugins e rotas e inicie o servidor
    startServer();
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao MongoDB:', error);
  });

// Função para registrar plugins, rotas e iniciar o servidor
const startServer = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3333 });
    console.log('Servidor iniciado na porta 3333.');
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
};


