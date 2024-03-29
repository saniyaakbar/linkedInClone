const mongoose=require('mongoose');
const plm=require('passport-local-mongoose');
mongoose.connect('mongodb://localhost/linkedin')
const userSchema=mongoose.Schema({
  name:String,
  username:String,
  email:String, 
  websiteUrl:String,
  location:String,
  contact:Number,
  gender:String,
  DOB:{type:Date},
  password:String,
  isadmin:{type:Boolean},
  usersPost:[{type:mongoose.Schema.Types.ObjectId ,ref:'posts'},],
  description:String,
  job:[{
    type:mongoose.Schema.Types.ObjectId,ref:'jobs'
  }] ,
  headline:String ,
  connectionrequest:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
  }]
  ,
  connectionrequestsent:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
  }],
  industrydomain:String,
  connections:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
  }],
  noofjobapplied:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'jobs'
  }],
  country:String,
  city:String,
  state:String,
  profilePic: {
    type:String,
    default:"user.png"
  },
  background: {
    type:String,
    default:"LinkedIn-Default-Background-2020-.png"
  },
  education: String,
  about:{
    type:String,
    default:"Add About section To make your profile seem authenticated and genuine"
  }
  

})
userSchema.plugin(plm);
module.exports=mongoose.model('users',userSchema);