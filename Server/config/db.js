import mongoose from 'mongoose'



const connectDb = async () =>{
    try{

        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Conncetd To mongodb Databse ${conn.connection.host}`);

    } catch (error){
        console.log(`Error in Mongodb ${error}`);

    }
}


export default connectDb;