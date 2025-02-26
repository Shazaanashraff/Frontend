import mongoose from "mongoose";

const courtSchema = new mongoose.Schema({
    manId: {type:mongoose.Schema.Types.ObjectId, ref:'manager', required:true},
    name: {type:String , required: true},
    image: {type:String, required: true},
    location: {type:String, required: true},
    about: {type:String, required: true},
    available: {type:Boolean, default:true},
    fees: {type:Number, required:true},
    locationLink: {type: String, required: true},
    slots_booked: {type:Object, default:{}},
    speciality: {type:String, required:true},
    latitude: {type:Number},
    longitude:{type:Number},
    openTime: {type:String, required:true},
    closeTime: {type:String, required:true},

}, {minimize:false}, {timeStamps:true})

const courtModel = mongoose.models.court ||  mongoose.model('court', courtSchema)

export default courtModel