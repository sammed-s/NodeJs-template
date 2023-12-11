import express from "express";
const app = express();
import userRoutes from "./src/routes/userRoutes.js"


app.use("/api/v1.1", userRoutes)

app.get("/api/v1/firstdeploy", (req,res)=> {
    res.status(200).json({
        message : "Successfully deployed!"
    })
})

app.get("/api/v1/user/:userId", (req,res)=> {
    const {userId} = req.params
    //or alternatively you can do
    // const userId = req.params.userId
    res.status(200).json({
        message : `userid received is : ${userId}`
    })
})


app.get("/", (req,res)=> {
    res.status(200).json({
        message : "Welcome to nextlevel deployments!"
    })
})


app.listen(8080, ()=> {
    console.log("Server started on 8080");
})