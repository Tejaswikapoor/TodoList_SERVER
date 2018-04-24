const express =  require('express')
const app = express()
const path=require('path')

let todos=[]
app.use('/',express.static(path.join(__dirname,'public')))

app.get('/todos',(req,res)=>{
        res.send(todos)
})
app.get('/addtodo',(req,res)=>{
    todos.push(req.query.newtodo)
    res.send("success")
})

app.listen(4344,function(){
    console.log("server started at http://localhost:4344" )
})