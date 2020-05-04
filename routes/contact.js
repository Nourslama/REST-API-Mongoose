const express=require("express")
const router=express()
const Contact=require('../model/contact')

router.post('/',async(req,res)=>{

    try {
      const {name,mail,tel}=req.body
//controle de contact par rapport à son mail chaque utitilisateur dois avoir un et un seul mail entrée
      const searchEmail= await Contact.findOne({mail})
    
      if (searchEmail) return res.status(400).json({msg:"Contact already exists"})
     
      const newContact = new Contact({
        name,
        mail,
        tel
      });
    
      const contacts= await newContact.save()
      res.json(contacts)
    } catch (err) {
      console.error(err.message);
    }
})
router.get("/",async(req,res)=>{
  try {
    const contacts=await Contact.find()
    contacts.length===0?res.status(400).json({msg:"DataBase is Empty"}):res.json(contacts)
  } catch (err) {
    console.error(err)
  }

})

router.put('/:id',async(req,res)=>{
  try {
    const contactlist=req.body
    await Contact.findOneAndUpdate({_id:req.params.id},{$set:{...contactlist}})
    res.send({success:true})
  } catch (err) {
    console.error(err.message)
    res.send({success:false})
   
  }
})

router.delete("/:id",async(req,res)=>{
  try {
    let id_contact=req.params.id
    await Contact.findOneAndDelete({ _id:id_contact})
    res.send({success:true})
    
  } catch (err) {
    console.error(err.message)
    res.send({success:false})
    
  }
})

module.exports=router