import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.CONNECTION_DATABASE, {
})
    .then(db => console.log(db.Schema))
    .catch(error => console.log(error))