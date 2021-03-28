import mongoose from 'mongoose';
const Float = require('mongoose-float').loadType(mongoose);

const Supplie = new mongoose.Schema({
    idStudent: {
        type: String,
        require: true,
    },
    nmSupplie: {
        type: String,
        require: true,
    },
    qtSupplie: {
        type: Number,
        require: true,
    },
    vlUnity: {
        type: Float,
        require: true,
    }, 
})

export default mongoose.model('supplie', Supplie)