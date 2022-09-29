import {Router} from 'express';
import Task from "../models/Task";

const router = Router();

router.get("/",(req,res)=>{
    res.render('index');
    //res.send("Pagina de inicio");
});

router.post("/tasks/add",async (req,res)=>{
    const task = Task(req.body);
    const taskSaved = await task.save();
    console.log(taskSaved);

    //console.log(task);
   //console.log(req.body);
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