import { Schema,model,Types } from "mongoose";

let  Schema =  new Schema({
    name:{ type:String,required:true },
    last_name:{ type:String,requiered:false },
    city: { type:String,required:true },
    country: { type:String,required:true },
    date: { type:Date }, //por defecto es false si no declaro que no es definido
    photo: { type:String,required:true },
    active: { type:Boolean,required:true },
    user_id: { 
        type: Types.ObjectId, //tipo de dato de mongoose para REFERENCIAR datos de una coleccion de mongoose
        ref: 'users', //nombre de la colleccion con la cual se quiere refenciar el modelo
        required: true
    }
},{
    timestamps: true
}) 

let collection = 'authors'
 
let Author = model (schema,collection)
export default Author