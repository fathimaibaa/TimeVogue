
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL, {
        
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    });
    let db = mongoose.connection;
    db.on('connected', () => {
        console.log('Connected to MongoDB');
    });
    db.on('error', (err) => {
        console.log(err);
    });
};

module.exports = { dbConnect };