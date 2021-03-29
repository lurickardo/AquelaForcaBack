import { Request, Response} from 'express';
import Responsible from '../database/models/Responsible';

export default class ResponsibleController {
    async login(request: Request, response: Response) {
        const data = request.query;

        const nmEmail = data.nmEmail as string;
        const nmPassword = data.nmPassword as string;

        await Responsible.find({ nmEmail, nmPassword }).then((list: any) => {
            return response.status(200).json({list})
          }).catch((error: string) => {
            return response.status(500).json({message: `${error}`})
          }) 
    }

    async store(request: Request, response: Response) {
        const data = request.query;

        const nmResponsible = data.nmSchool as string;
        const nmEmail = data.nmEmail as string;
        const nmPassword = data.nmPassword as string;
        
        await new Responsible({nmResponsible, nmEmail, nmPassword}).save().then(() => {
            return response.status(201).json({message: "Responsável criado com sucesso"})
          }).catch((error: string) => {
            return response.status(500).json({message: `${error}`})
          })        
    }
}