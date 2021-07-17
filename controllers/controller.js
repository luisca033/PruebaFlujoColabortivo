
const home=(req,res)=>{
    return res.json({ok:true,
    msg:'home'
    })
}
const unknow=(req,res)=>{
    return res.json({ok:true,
        msg:'unknow'
        })
}

module.exports={
    home,
    unknow
}