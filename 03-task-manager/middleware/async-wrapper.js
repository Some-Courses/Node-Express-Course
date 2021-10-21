//In the future we'll use some npm packages, and ww will not need this file, but it is usefull to understand de core concepts of wrapping.

//We have a lot of try{}catch(err){} blocks in our controllers and we can avoid that by doing this.

const asyncWrapper = (cb)=>{
    return async(req,res,next)=>{
      try{
        await cb(req,res,next);
      }catch(err){
        next(err)
      }

    }
}


// }catch(err){
//   res.status(500).json({msg:err})
// }

module.exports= asyncWrapper;