import { Request, Response } from 'express';
import Responsible from '../database/models/Responsible';

export default class ResponsibleController {
  async login(request: Request, response: Response) {
    const data = request.query;

    const nmEmail = data.nmEmail as string;
    const nmPassword = data.nmPassword as string;
    
    await Responsible.find().where({ nmEmail, nmPassword }).then((data: any) => {
      return response.status(200).json(data)
    }).catch((error: string) => {
      return response.status(500).json({ message: `${error}` })
    })
  }

  async store(request: Request, response: Response) {
    const data = request.query;

    const nmResponsible = data.nmResponsible as string;
    const nmEmail = data.nmEmail as string;
    const nmPassword = data.nmPassword as string;

    await new Responsible({ nmResponsible, nmEmail, nmPassword }).save().then(() => {
      return response.status(201).json({ message: "Responsável criado com sucesso" })
    }).catch((error: string) => {
      return response.status(500).json({ message: `${error}` })
    })
  }
}