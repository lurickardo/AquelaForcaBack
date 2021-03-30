import { Request, Response } from 'express';
import Student from '../database/models/Student';

interface IStudent {
    id?: string;
    idResponsible: string;
    idGrade: string;
    idSchool: string;
    nmStudent: string;
    nmRa: string;
}

export default class StudentController {
    async listStudentsByResponsible(request: Request, response: Response) {
        const idResponsible = request.params.idResponsible as string;

        await Student.find({ idResponsible }).then((list: any) => {
            return response.status(200).json(list)
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }

    async store(request: Request, response: Response) {
        const students = request.body as Array<IStudent>

        await Student.insertMany(students).then(() => {
            return response.status(201).json({ message: "Alunos criados com sucesso." })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }

    async update(request: Request, response: Response) {
        const idResponsible = request.params.idResponsible as string
        const students = request.body as Array<IStudent>;

        const bulkOps = students.map((student) => ({
            updateOne: {
                filter: {idResponsible, _id: student.id},
                update: student,
            }
        }))

        await Student.bulkWrite(bulkOps).then(() => {
            return response.status(200).json({ message: "Alunos alterados com sucesso." })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }

    async delete(request: Request, response: Response) {
        const _id = request.params.id as string;

        await Student.deleteOne({_id}).then(() => {
            return response.status(200).json({ message: "Aluno excluído com sucesso." })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }
}