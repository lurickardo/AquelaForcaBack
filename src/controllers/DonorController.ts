import { Request, Response } from 'express';
import Donor from '../database/models/Donor';
import DonateSupplie from '../database/models/DonateSupplie';
import SupplieStudent from '../database/models/SupplieStudent';

export default class DonorController {
    async store(request: Request, response: Response) {
        const data = request.query;
        let dataDonateSupplies = request.body;

        const nmSurname = data.nmSurname as string;
        const nmDonor = data.nmDonor as string;
        const nmCpf = data.nmCpf as string;
        const nmEmail = data.nmEmail as string;

        try {
            const donor = await new Donor({ nmSurname, nmDonor, nmCpf, nmEmail }).save();

            dataDonateSupplies = dataDonateSupplies.map((donateSupplie: any) => {
                Object.assign(donateSupplie, {donor: `${donor._id}`});
                return donateSupplie;
            });
            
            const donateSupplies = await DonateSupplie.insertMany(dataDonateSupplies)

            let listValueBillet = [];
            for(let donateSupplie of donateSupplies) {
                const supplieStudent = await SupplieStudent.find().populate('supplie').where({_id: donateSupplie.supplieStudent[0]})
                listValueBillet.push(donateSupplie.qtDonate * supplieStudent[0].supplie[0].vlUnity)
            }
            
            const totalValueBullet = listValueBillet.reduce((oldValue, newValue) => oldValue + newValue).toFixed(2)
            return response.status(201).send({donor, totalValueBullet})
        } catch (error) {
            return response.status(500).json({ message: `${error}` })
        }
    }
}