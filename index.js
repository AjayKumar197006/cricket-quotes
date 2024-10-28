const express=require("express")
const cors=require("cors")
const db=require("./db.js")

const app=express()
app.use(express.json())
app.use(cors())

app.listen(8000,()=>
{
    console.log("server started")
})

app.get("/get-quote",(req,res)=>
{
    db.getQuote()
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        console.log(err)
    })

    
})
app.post("/post-quote",(req,res)=>
{
    db.addQuote(req.body.number,req.body.quote,req.body.name)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        console.log(err)
    })
})

app.put("/update-quote/:number",(req,res)=>
{
    const id=req.params.number
    db.updateQuote(req.body.number,req.body.quote,req.body.name,id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        console.log(err)
    })
})

app.delete("/delete-quote/:number",(req,res)=>
{
    const id=req.params.number
    db.deleteQuote(id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        console.log(err)
    })
})