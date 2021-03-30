import { Request, Response } from 'express';
import Supplie from '../database/models/Supplie';

export default class SupplieController {

  async listAll(request: Request, response: Response) {
    await Supplie.find().then((data: any) => {
      return response.status(200).json(data)
    }).catch((error: string) => {
      return response.status(500).json({ message: `${error}` })
    })
  }
}