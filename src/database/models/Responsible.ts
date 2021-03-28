import mongoose from 'mongoose';

const Responsible = new mongoose.Schema({
    nmResponsible: {
        type: String,
        require: true,
    },
    nmEmail: {
        type: String,
        require: true,
        unique: true
    },
    nmPassword: {
        type: String,
        require: true,
    }
})

export default mongoose.model('responsible', Responsible)