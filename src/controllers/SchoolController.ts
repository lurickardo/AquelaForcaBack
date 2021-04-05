import { Request, Response } from 'express';
import School from '../database/models/School';

export default class SchoolController {
    async listSchoolsByStateAndCity(request: Request, response: Response) {
        const params = request.params;

        const idState = Number(params.idState) as number;
        const idCity = Number(params.idCity) as number;
        
        await School.find().where({ idState, idCity }).then((data: any) => {
            return response.status(200).json(data)
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }

    async store(request: Request, response: Response) {
        const data = request.body;

        const nmSchool = data.nmSchool as string;
        const idState = Number(data.idState) as number;
        const idCity = Number(data.idCity) as number;
        const nmEndereco = data.nmEndereco as string;
        const nrEndereco = Number(data.nrEndereco) as number;

        await new School({ nmSchool, idState, idCity, nmEndereco, nrEndereco }).save().then(() => {
            return response.status(201).json({ message: "Escola criada com sucesso" })
        }).catch((error: string) => {
            return response.status(500).json({ message: `${error}` })
        })
    }
}