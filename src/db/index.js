import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// import util from "util";
//  console.log(
//     util.inspect(connectionInstance, {
//         showHidden: false,
//         depth: null,
//         colors: true,
//     })
//     );

const connectDB = async () => 
{
    try
    {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Mongodb database is successfully connected on host : 
            ${connectionInstance}`);
 
    }
    catch(error)
    {
        console.log(`Fail to Connect to data base - ERROR :${error}`);
        process.exit();
    }
};


export default connectDB;