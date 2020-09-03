const express=require("express")
const mongoose=require('mongoose')
const router=require('./routes/contact')
const app=express()
app.use(express.json())

const db="mongodb+srv://name:<password>cluster0-8bamv.mongodb.net/users?retryWrites=true&w=majority"

 mongoose.connect(db,{ useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>
     console.log("Mongodb connected")).catch(err=>console.log(err))
     app.use('/contact-list',router)
 
 


const port=process.env.Port||5000
app.listen(port,err=>{
    err? console.log("can't connected"):console.log(`connected on port ${port}...`);  
})
