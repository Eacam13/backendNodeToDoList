import { FastifyRequest, FastifyReply } from "fastify"
import { EditTaskService } from "../services/EditTaskService"


class EditTaskController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };
        const { isCompleted } = request.body as { isCompleted: boolean };

        const taskService = new EditTaskService();
        
        const updatedTaskResult = await taskService.execute({ id, isCompleted });
            
        return reply.send(updatedTaskResult);
    }
}

export { EditTaskController }