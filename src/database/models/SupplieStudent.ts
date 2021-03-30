import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const SupplieStudent = new Schema({
    supplie: [{type: ObjectId, ref: "supplie"}],
    student: [{type: ObjectId, ref: "student"}],
    qtSupplie: {
        type: Number,
        require: true,
    },
})

export default mongoose.model('supplieStudent', SupplieStudent)