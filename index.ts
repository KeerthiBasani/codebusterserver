import express=require("express")
import { AppDataSource } from "./data-source"
import userRoutes from "./routes/userroute";
import cors=require("cors")

const app=express();
app.use(cors())
app.use(express.json())
app.use("/api", userRoutes);

AppDataSource.initialize().then(async () => {
       console.log("Inserting a new user into the database...")
}).catch(error => console.log(error))


    app.get("/", (req,res)=>{
    res.send('hello nodejs')
});

app.listen("4000",():void=>{console.log("server is running");
});