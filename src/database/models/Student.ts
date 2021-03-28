import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Student = new mongoose.Schema({
    idResponsible: {
        type: String,
        require: true,
    },
    idGrade: {
        type: String,
        require: true,
    },
    idSchool: {
        type: String,
        require: true,
    },
    nmStudent: {
        type: String,
        require: true,
    },
    nmRa: {
        type: String,
        require: true,
    }
})

export default mongoose.model('student', Student) 