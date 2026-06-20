import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import {app} from './app.js';

dotenv.config(
    {
        path: './.env'
    }
);

const PORT = process.env.PORT || 3000;

connectDB().then(
    () =>
    {
        app.on('error',(error) =>
        {
            console.log("Error : "+ error);
            process.exit(1);
        });

        app.listen(PORT,() => {console.log(`The app is listening on port : ${PORT}`) });
    }
).catch(
    (error) =>
    {
        console.log("Fail to start server : "+ error);
    }
);
