import mongoose from "mongoose";


const connectToMongodb =async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected To MONGO DB")
    } catch (error) {
        console.log("Error occured while connecting to Mongo DB",error.message)
        
    }

}


export default connectToMongodb;

