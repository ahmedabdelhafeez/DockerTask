const express = require("express")
const app = express()
const PORT =3000
app.get('/',(req,res)=>{
    res.send("<h1>Ahmed Mohamed Mahmoud Abdel_Hafeez</h1>\n <h3>Section:1</h3>")
})
app.listen(PORT,() =>{
    console.log("connected at port ${PORT}")
})