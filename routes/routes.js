const {Router} =require('express')
const router=Router();

router.get('/',(req,res)=>{
    res.send('Home')
})
router.get('*',(req,res)=>{
    res.send('Unknow page')
})

module.exports=router