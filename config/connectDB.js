// mongoose
const mongoose=require("mongoose")
//Connect DB
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        console.log(`DataBase Connected`);
    } catch (error) {
        console.error(`connection to DataBase Failed ${error}`);
    }
}
module.exports=connectDB