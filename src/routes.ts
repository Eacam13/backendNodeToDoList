import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'
import { CreateTaskController } from './controllers/CreateTaskController'
import { ListTasksController } from './controllers/ListTasksController'
import { DeleteTaskController } from './controllers/DeleteTaskController'
import { EditTaskController } from './controllers/EditTaskController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    
    fastify.post('/task', (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateTaskController().handle(request,reply)
    })

    fastify.get('/tasks', (request: FastifyRequest, reply: FastifyReply) => {
        return new ListTasksController().handle(request,reply)
    })

    fastify.delete('/task', (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteTaskController().handle(request,reply)
    })

    fastify.put('/task/:id', (request: FastifyRequest, reply: FastifyReply) => {
        return new EditTaskController().handle(request, reply);
    })
}