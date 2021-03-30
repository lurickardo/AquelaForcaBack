import mongoose from 'mongoose';

class Connection {
    public mongodbConnection() {
        return mongoose.connect('mongodb://localhost:27017/db_hackaton_fcamara', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
    }
}

export default new Connection;