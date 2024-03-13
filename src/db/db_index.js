import mongoose  from"mongoose" ;
import { DB_NAME } from "../constants.js" ;
import dotenv from 'dotenv'
dotenv.config();

dotenv.config();

const  connect_db = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected !! CONECTION HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR ", error);
        process.exit(1);
    }
};

export default connect_db