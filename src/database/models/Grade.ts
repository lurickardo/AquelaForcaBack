import mongoose from 'mongoose';

const Grade = new mongoose.Schema({
    nmGrade: {
        type: String,
        require: true,
    }
})

export default mongoose.model('grade', Grade);