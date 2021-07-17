const {Router} =require('express');
const { home } = require('../controllers/controller');
const router=Router();

router.get('/',home)
router.get('*',(req,res)=>{
    res.send('Unknow page')
})

module.exports=router