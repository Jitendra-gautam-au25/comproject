import dotenv from "dotenv"
dotenv.config()
import express from "express"
import mongoDb from "./db/dbConnection.js";
import web from "./routes/productRoutes.js"
import Cartweb from "./routes/cartRoutes.js"
import Userweb from "./routes/userRoutes.js"
import cors from "cors"
const PORT = process.env.PORT

const MongodbUrl = process.env.MongodbUrl
const app = express()


mongoDb(MongodbUrl)

app.use(express.json())
app.use(cors())

// middleware
app.use(express.urlencoded({extended:true}))

// app.get("/",(req,res)=>{
//     res.send("Helo")
// })
app.use("/product",web)
app.use("/Cartproduct",Cartweb)
app.use("/user",Userweb)




app.listen(PORT,()=>{
    console.log(`Server is Listening ${PORT}`)
})