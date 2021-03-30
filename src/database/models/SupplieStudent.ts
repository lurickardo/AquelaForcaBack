import mongoose from 'mongoose';

const SupplieStudent = new mongoose.Schema({
    idSupplie: {
        type: String,
        require: true,
    },
    idStudent: {
        type: String,
        require: true,
    },
    qtSupplie: {
        type: Number,
        require: true,
    },
})

export default mongoose.model('supplieStudent', SupplieStudent)