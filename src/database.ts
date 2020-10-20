import mongoose, {ConnectionOptions} from 'mongoose'
import config from './config';

(async () =>{
    try {
        const mongooseOptions: ConnectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // user: config.MONGO_USER,
            // pass: config.MONGO_PASS
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`,mongooseOptions);
        console.log("db connected in ", db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()
