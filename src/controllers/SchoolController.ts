import { Request, Response} from 'express';

export default class SchoolController {
    async listSchoolsByStateAndCity(request: Request, response: Response) {
        return response.status(200).send({});
    }

    async store(request: Request, response: Response) {
        return response.status(201).send({
            message: "Escola cadastrada com sucesso!"
        });
    }
}