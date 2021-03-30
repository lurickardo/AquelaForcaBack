import { Request, Response } from 'express';
import Student from '../database/models/Student';

interface IStudent {
    idResponsible?: String,
    idGrade?: String,
    idSchool?: String,
    nmStudent?: string,
    nmRa?: String
  }

export default class StudentController {
    async listStudentsByResponsible(request: Request, response: Response) {
        const idResponsible = request.params.idResponsible;

        await Student.find({idResponsible}).then((list: any) => {
            return response.status(200).json(list)
        }).catch((error: string) => {
            return response.status(500).json({message: `${error}`})
        })
    }

    async store(request: Request, response: Response) {
        const students = request.query.students as Array<IStudent>

        await Student.insertMany(students).then(() => {
            return response.status(201).json({ message: "Alunos criados com sucesso" })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }

    async update(request: Request, response: Response) {
        const students = request.query.students as Array<IStudent>;
        
        await Student.updateMany({idResponsible: students[0].idResponsible}, {$set: {
            
        }}).then(() => {
            return response.status(200).json({ message: "Alunos alterados com sucesso" })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }
}