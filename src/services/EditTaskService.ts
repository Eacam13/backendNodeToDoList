import prismaClient from "../prisma";

interface EditTaskProps {
    id: string;
    isCompleted: boolean;
}

class EditTaskService {
    async execute({ id, isCompleted }: EditTaskProps) {
        if (!id) {
            throw new Error('Solicitação inválida!');
        }

        const existingTask = await prismaClient.task.findUnique({
            where: {
                id: id
            }
        });
        
        if (!existingTask) {
            throw new Error("Tarefa não encontrada");
        }

        const updatedTaskData = await prismaClient.task.update({
            where: {
                id: id
            },
            data: {
                isComplete: !isCompleted
            }
        });

        return { message: "Atualizado com sucesso!", updatedTask: updatedTaskData };
    }
}

export { EditTaskService }