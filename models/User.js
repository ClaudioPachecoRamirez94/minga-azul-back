import mongoose from "mongoose";

let schema = new mongoose.Schema({
    email: { type:String,required: true },
    password: { type:String,required:true },
    photo: { type:String,required:true },
    role: { type:Number,required:true },
    is_online: { type:Boolean,required:true },
    is_verified: { type:Boolean,requiered:true},
    verify_code:{ type:String,requiered:true }
},{
    timestamps: true
})
let colection = 'users' //debe ser SIEMPRE en plural porque es un conjunto de recursos/datos/documentos y en lo posible en minuscula

let User = mongoose.model(schema,collection)
export default User
