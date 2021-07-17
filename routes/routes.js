const {Router} =require('express');
const { home, unknow } = require('../controllers/controller');
const router=Router();

router.get('/',home)
router.get('*',unknow) //

module.exports=router