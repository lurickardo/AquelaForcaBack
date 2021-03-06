import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const donateSupplie = new Schema({
    supplieStudent: [{ type: ObjectId, ref: "supplieStudent" }],
    donor: [{ type: ObjectId, ref: "donor" }],
    qtDonate: {
        type: Number,
        require: true,
    }
})

export default mongoose.model('donateSupplie', donateSupplie)