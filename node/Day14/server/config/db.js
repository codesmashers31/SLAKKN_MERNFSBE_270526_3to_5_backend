<<<<<<< HEAD

import mongoose from "mongoose"

const connectDB = async ()=>{

  try {
       
    const conn = await mongoose.connect(process.env.MONGOURI)
    console.log(`Db Connection succfully done ${conn.connection.host}`);
    


  } catch (error) {
    console.log('Error',error.message);
    process.exit(1)
    
  }


}

export default connectDB
=======
import mongoose from "mongoose";

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGOURI);

        console.log("MongoDB Connected");

    } catch (error) {

        console.log("Database Error:", error.message);

        process.exit(1);

    }

};

export default connectDB;
>>>>>>> 478c8dabc36d04b4960e6565a13ca7fb0beb16a7
