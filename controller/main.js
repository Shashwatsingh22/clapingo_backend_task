//Importing the Models
const teachFavList = require('../models/teachFavList');

exports.home = (req,res,next)=>{
    res.status(200).json({
        message : "Server Started Working!"
    })}

exports.mostLikeTeach = async(req,res,next) => {
    try{

    //     const data = await teachFavList.aggregate([ 
    //         {
    //      $max : "$likes",   
    //     $group : { 
    //         _id : "$teachId",
    //         stdIdsList : "$stdIdsList",
    //         mostLike : { $match : "$likes"}
    //     }
    // }
    // ]);

    const data = await teachFavList.find();

         data.sort((a,b)=>{
            return b.count - a.count;
         })
         //console.log(data);
            
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