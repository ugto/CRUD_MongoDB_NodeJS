//import mongoose from "mongoose";

import {connect} from "mongoose";

(async()=>{
    try {
        //const db = await connect("mongodb://localhost:27017/crud")
        const db = await connect("mongodb+srv://usr:usr@cluster0.2bbaoni.mongodb.net/?retryWrites=true&w=majority")
        console.log("BASE DE DATOS CONECTADA A", db.Connection.name)  
    } catch (error) {
        console.error(error);
    } 

})()
