const {Router} =require('express')
const router=Router();

router.get('/',()=>{
    res.send('Home')
})
router.get('*',()=>{
    res.send('Unknow page')
})