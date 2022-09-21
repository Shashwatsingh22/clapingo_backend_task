//Importing the Models
const teachFavList = require('../models/teachFavList');

exports.home = (req,res,next)=>{
    res.status(200).json({
        message : "Server Started Working!"
    })}

exports.mostLikeTeach = async(req,res,next) => {
    try{

        const data = await teachFavList.aggregate([
            {$sort : {count:1}}
        ])
      
         res.status(200).json({
            status : true,
            message : "Found the Most Liked Teacher",
            result : data[0]
         })
    }
    catch(err)
    {
        console.log(err)
         res.status(500).json({
            status : false,
            message: "Some Error Caused",
            err : err
         })
    }
}    