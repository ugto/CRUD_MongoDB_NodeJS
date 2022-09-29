import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.send("Pagina de inicio");
});

app.listen(3000)
console.log('SERVIDOR E PUERTO ', 3000);