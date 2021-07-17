const express =require("express") ;
const rutas=require('./routes/routes')
const app= express();
app.use(rutas)

app.listen(3000, ()=>{
    console.log('Arranco');
    console.log('Nuevo clg'); 
})