import express from "express";
import exphbs from "express-handlebars";
import indexRoutes  from "./routes/index";
import path from 'path';
import { create } from 'express-handlebars';


const app = express();
app.set("views", path.join(__dirname, "views"));

app.engine(
    ".hbs",
    create({
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      defaulLayout: "main",
      extname: ".hbs",
    }).engine
  );

app.set("view engine",".hbs");

app.use(indexRoutes);
export default app;