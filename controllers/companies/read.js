import Company from "../../models/Chapters.js"

let read = async(req,res,next)=>{
    try{
        let all = await Company.find()
        return  res.status(200).json({
            companies: all
        })
    }catch(error){
        return res.status(400).json({
            error: "error"
        })
    }
}

export default read