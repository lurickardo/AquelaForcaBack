import { Request, Response } from 'express';
import SupplieStudent from '../database/models/SupplieStudent';

interface ISupplieStudent {
    _id?: string;
    supplie: string;
    student: string;
    qtSupplie: number;
}

export default class SupplieStudentController {
    async listSuppliesByStudent(request: Request, response: Response) {
        const idStudent = request.params.idStudent as string
        
        await SupplieStudent.find().where({student: idStudent}).populate(['supplie', 'student']).then((list: any) => {
            return response.status(200).json(list)
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }

    async store(request: Request, response: Response) {
        const supplieStudents = request.body as Array<ISupplieStudent>
        
        await SupplieStudent.insertMany(supplieStudents).then(() => {
            return response.status(201).json({ message: "Materiais do aluno cadastrados com sucesso." })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }

    async update(request: Request, response: Response) {

    }

    async delete(request: Request, response: Response) {
        const _id = request.params._id as string;

        await SupplieStudent.deleteOne({_id}).then(() => {
            return response.status(200).json({ message: "Material do aluno excluído com sucesso." })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }
}