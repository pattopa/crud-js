import express from "express"
import bodyParser from "body-parser"
import userRouter from "./user.js"

const app= express()
app.use(bodyParser.json())
//app.use('/', userRouter)
app.use('/api', userRouter)

app.listen(3000,function(){
console.log("may server is running on server port of 3000");
})