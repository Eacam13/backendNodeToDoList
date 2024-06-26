import { FastifyRequest, FastifyReply } from "fastify"
import { ListTasksService } from "../services/ListTasksService"

class ListTasksController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listTaskService = new ListTasksService()

        const tasks = await listTaskService.execute()

        reply.send(tasks)
    }
}

export { ListTasksController }