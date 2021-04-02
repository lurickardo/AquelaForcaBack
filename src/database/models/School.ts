import mongoose from 'mongoose';

const School = new mongoose.Schema({
    nmSchool: {
        type: String,
        require: true,
        unique: true,
    },
    idState: {
        type: Number,
        require: true,
    },
    idCity: {
        type: Number,
        require: true,
    },
    nmEndereco: {
        type: String,
        require: true,
    },
    nrEndereco: {
        type: Number,
        require: true,
    }
})

export default mongoose.model('school', School)