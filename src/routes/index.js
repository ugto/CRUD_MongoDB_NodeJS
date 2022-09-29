import {Router} from 'express';
const router = Router();

router.get("/",(req,res)=>{
    res.send("Pagina de inicio");
});

router.get("/about",(req,res)=>{
    res.send("Pagina de About");
});


export default router;