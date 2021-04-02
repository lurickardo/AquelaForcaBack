import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Student = new Schema({
    responsible: [{ type: ObjectId, ref: "responsible" }],
    grade: [{ type: ObjectId, ref: "grade" }],
    school: [{ type: ObjectId, ref: "school" }],
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