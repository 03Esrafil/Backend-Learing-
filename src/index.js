
import connect_db from "./db/db_index.js";
import dotenv from'dotenv'

dotenv.config({path:'./env'});

PORT=process.env.PORT||4000


connect_db().then(()=>{
  app.listen(PORT,()=>{
    console.log(`Server is connected ${PORT}`);
  })
}).catch((err)=>{
  console.log(" Connection DB is failed !!!",err);
})

