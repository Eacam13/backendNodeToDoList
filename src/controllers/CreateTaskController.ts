import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateTaskService } from '../services/CreateTaskService'


class CreateTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const { task } = request.body as { task: string }

        const taskService = new CreateTaskService()
        const newTask = await  taskService.execute({ task })

        reply.send(newTask)
    }
}

export { CreateTaskController }