import mongoose from "mongoose"

let schema = new mongooose.Schema({
    name: { type:String,requiered:true },
    logo: { type:String,requiered:true },
    website: { type:String,requiered:true },
    description: { type:String,requiered:false },
    active: { type:Boolean,requiered:true },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true,
    }

},{
    timestamps: true
})

let collection = 'companies'
let COmpany = mongoose.Model ( schema,collection )
export default Company