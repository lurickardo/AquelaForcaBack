import mongoose from 'mongoose';
const Float = require('mongoose-float').loadType(mongoose);

const Supplie = new mongoose.Schema({
    nmSupplie: {
        type: String,
        require: true,
    },
    vlUnity: {
        type: Float,
        require: true,
    },
})

export default mongoose.model('supplie', Supplie)