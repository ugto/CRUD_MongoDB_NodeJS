import {Router} from 'express';
import Task from "../models/Task";

const router = Router();

router.get("/",async(req,res)=>{
    const task = await Task.find().lean();
    //console.log(task);
    res.render('index',{tasks: task});
    //res.send("Pagina de inicio");
});

router.post("/tasks/add",async (req,res)=>{
    const task = Task(req.body);
    await task.save();
    //const taskSaved = await task.save();
    //console.log(taskSaved);
    res.redirect("/");

    //console.log(task);
   //console.log(req.body);
    //res.send("Guardar Tarea");
});



router.get("/about",(req,res)=>{
    res.render('about');
    //res.send("Pagina de About");
});

router.get("/edit/:id",async(req,res)=>{
    const task = await Task.findById(req.params.id).lean();
    res.render('edit',{task});
    //res.send("Pagina de About");
});

router.post("/edit/:id",(req,res)=>{
    console.log(req.body);
    res.send('Recibido');
});


export default router;