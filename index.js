import express from "express";
const app = express();

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


app.listen(8080, ()=> {
    console.log("Server started on 8080");
})