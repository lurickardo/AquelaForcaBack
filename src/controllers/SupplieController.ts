import { Request, Response } from 'express';
import Supplie from '../database/models/Supplie';

export default class SupplieController {
  async listSuppliesByStudent(request: Request, response: Response) {
    const idStudent = request.params.idStudent;//TODO

    await Supplie.find().where({ idStudent }).then((list: any) => {
      return response.status(200).json(list)
    }).catch((error: string) => {
      return response.status(500).json({ message: `${error}` })
    })
  }

  async listAll(request: Request, response: Response) {
    await Supplie.find({}).then((list: any) => {
      return response.status(200).json(list)
    }).catch((error: string) => {
      return response.status(500).json({ message: `${error}` })
    })
  }

  async store(request: Request, response: Response) {
    const data = request.query;

    const nmSupplie = data.nmSupplie as string;
    const sgState = data.sgState as string;
    const idCity = Number(data.idCity) as number;
    const nmEndereco = data.nmEndereco as string;
    const nrEndereco = Number(data.nrEndereco) as number;

    await new Supplie({ nmSupplie, sgState, idCity, nmEndereco, nrEndereco }).save().then(() => {
      return response.status(201).json({ message: "Escola criada com sucesso" })
    }).catch((error: string) => {
      return response.status(500).json({ message: `${error}` })
    })
  }

  async update(request: Request, response: Response) {
    const data = request.query;

    const nmSupplie = data.nmSupplie as string;
    const sgState = data.sgState as string;
    const idCity = Number(data.idCity) as number;
    const nmEndereco = data.nmEndereco as string;
    const nrEndereco = Number(data.nrEndereco) as number;

    await new Supplie({ nmSupplie, sgState, idCity, nmEndereco, nrEndereco }).save().then(() => {
      return response.status(200).json({ message: "Escola criada com sucesso" })
    }).catch((error: string) => {
      return response.status(500).json({ message: `${error}` })
    })
  }

  async delete(request: Request, response: Response) {
    const data = request.query;

    const nmSupplie = data.nmSupplie as string;
    const sgState = data.sgState as string;
    const idCity = Number(data.idCity) as number;
    const nmEndereco = data.nmEndereco as string;
    const nrEndereco = Number(data.nrEndereco) as number;

    await new Supplie({ nmSupplie, sgState, idCity, nmEndereco, nrEndereco }).save().then(() => {
      return response.status(200).json({ message: "Escola criada com sucesso" })
    }).catch((error: string) => {
      return response.status(500).json({ message: `${error}` })
    })
  }
}