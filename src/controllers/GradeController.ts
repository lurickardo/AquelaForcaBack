import { Request, Response } from 'express';
import Grade from '../database/models/Grade';

export default class GradeController {
  async listAll(request: Request, response: Response) {
    await Grade.find().then((data: any) => {
      return response.status(200).json(data)
    }).catch((error: string) => {
      return response.status(500).json({ message: `${error}` })
    })
  }
}