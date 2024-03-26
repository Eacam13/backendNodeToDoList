import prismaClient from "../prisma"

interface CreateTaskProps{
    task: string
}

class CreateTaskService{
    async execute({ task }: CreateTaskProps){
        
        if(!task) throw new Error("Digite uma tarefa!")

        const taskData = await prismaClient.task.create({
            data:{
                task,
                isComplete: false
            },
        })

        return  taskData
    }
}

export { CreateTaskService }