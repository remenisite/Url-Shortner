const authMiddle = (req,res,next) = ()=>{
    const token = req.cookies.acc_token
    console.log(token)
}

module.exports = {authMiddle};s