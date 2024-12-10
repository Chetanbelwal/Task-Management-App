import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.json({
        "message":"Hy i am loading"
    })
})

export default app;