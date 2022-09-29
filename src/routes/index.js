import {Router} from 'express';
const router = Router();

router.get("/",(req,res)=>{
    res.render('index');
    //res.send("Pagina de inicio");
});

router.post("/tasks/add",(req,res)=>{
  
    res.send("Guardar Tarea");
});



router.get("/about",(req,res)=>{
    res.render('about');
    //res.send("Pagina de About");
});

router.get("/edit",(req,res)=>{
    res.render('edit');
    //res.send("Pagina de About");
});


export default router;