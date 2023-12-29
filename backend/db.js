const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/filpkart').then(p=>console.log("connected")).catch(err=>console.log(err))


const schema=mongoose.Schema({

    "username":String,
    "password":String


})
const model=mongoose.model('table1',schema)
model.find().then(p=>console.log(p)).catch(err=>console.log(err))

  module.exports=model