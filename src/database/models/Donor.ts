import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Donor = new mongoose.Schema({
    supplieStudent: [{ type: ObjectId, ref: "supplieStudent" }],
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