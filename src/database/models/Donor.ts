import mongoose from 'mongoose';

const Donor = new mongoose.Schema({
    nmSurname: {
        type: String,
        require: true,
    },
    nmDonor: {
        type: String,
        require: true,
    },
    nmCpf: {
        type: String,
        require: true,
    },
    nmEmail: {
        type: String,
        require: true,
    },
})

export default mongoose.model('donor', Donor)