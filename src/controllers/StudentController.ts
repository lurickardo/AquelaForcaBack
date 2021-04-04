import { Request, Response } from 'express';
import Student from '../database/models/Student';

interface IStudent {
    _id?: string;
    responsible: string;
    grade: string;
    school: string;
    nmStudent: string;
    nmRa: string;
}

export default class StudentController {
    async listStudentsByResponsible(request: Request, response: Response) {
        const responsible = request.params.responsible as string;

        await Student.find().where({ responsible }).then((data: any) => {
            return response.status(200).json(data)
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }

    async listStudentsBySchoolAndGrade(request: Request, response: Response) {
        const data = request.params; 

        const school = data.school as string;
        const grade = data.grade as string;

        await Student.find().where({ school, grade }).then((data: any) => {
            return response.status(200).json(data)
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
        const responsible = request.params.responsible as string
        const students = request.body as Array<IStudent>;

        const bulkOps = students.map((student) => ({
            updateOne: {
                filter: { responsible, _id: student._id },
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
        const _id = request.params._id as string;

        await Student.deleteOne({ _id }).then(() => {
            return response.status(200).json({ message: "Aluno excluído com sucesso." })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }
}