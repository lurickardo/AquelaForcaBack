import mongoose from 'mongoose';

const School = new mongoose.Schema({
    nmSchool: {
        type: String,
        require: true,
        unique: true,
    },
    sgState: {
        type: String,
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