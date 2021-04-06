import { Request, Response } from 'express';
import { mongo } from 'mongoose';
import mongodb from 'mongodb';
import SupplieStudent from '../database/models/SupplieStudent';

interface ISupplieStudent {
    _id?: string | mongodb.ObjectId;
    supplie: string;
    student: string;
    qtSupplie: number;
}

export default class SupplieStudentController {
    async listSuppliesByStudent(request: Request, response: Response) {
        const student = request.params.student as string

        await SupplieStudent.find().where({ student: student }).populate(['supplie', 'student']).then((data: any) => {
            return response.status(200).json(data)
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
        const supplieStudents = request.body as Array<ISupplieStudent>;

        const bulkOps = supplieStudents.map((supplieStudent) => {
            if (!supplieStudent._id) {
                supplieStudent._id = new mongo.ObjectID();
            }
            return {
                updateOne: {
                    filter: { _id: supplieStudent._id },
                    update: supplieStudent,
                    upsert: true
                }
            }
        })

        await SupplieStudent.bulkWrite(bulkOps).then(() => {
            return response.status(200).json({ message: "Materiais do aluno alterados com sucesso." })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }

    async delete(request: Request, response: Response) {
        const _id = request.params._id as string;

        await SupplieStudent.deleteOne({ _id }).then(() => {
            return response.status(200).json({ message: "Material do aluno excluído com sucesso." })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }
}