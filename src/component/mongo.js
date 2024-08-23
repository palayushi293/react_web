

const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Could not connect to MongoDB:', error);
    }
}

module.exports = connectToMongo;
