import { Request, Response } from 'express';
import DonateSupplie from '../database/models/DonateSupplie';


export default class DonateSuppliesController {
    async listAll(request: Request, response: Response) {
        await DonateSupplie.find().then((data: any) => {
          return response.status(200).json(data)
        }).catch((error: string) => {
          return response.status(500).json({ message: `${error}` })
        })
      }
} 