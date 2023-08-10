import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-fnc42sy-shard-00-00.idryvvh.mongodb.net:27017,ac-fnc42sy-shard-00-01.idryvvh.mongodb.net:27017,ac-fnc42sy-shard-00-02.idryvvh.mongodb.net:27017/?ssl=true&replicaSet=atlas-dezufb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;