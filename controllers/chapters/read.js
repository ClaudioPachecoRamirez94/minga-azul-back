import Chapter from "../../models/Chapters.js"

let read = async(req,res,next)=>{
    try{
        let all = await Chapter.find()
        return  res.status(200).json({
            chapters: all
        })
    }catch(error){
        return res.status(400).json({
            error: "error"
        })
    }
}

export default read