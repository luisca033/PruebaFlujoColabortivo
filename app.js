const express =require("express") ;
const app= express();
app.get('/',(req, res)=>{
    res.send('Inicio en master')
})
app.listen(3000, ()=>{
    console.log('Arranco');
})