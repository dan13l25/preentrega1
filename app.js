import express from express
import { ProductManager } from "./productManager"
import { productRouter } from "./routes/productRoute.js"

const app = express()
const port = 8080

export const productManager = new productManager

app.use("/api/product", productRouter)
app.use("/api/cart", productRouter)
app.use(express.json())

app.listen(port, (req,res) =>{
    console.log("servidor funcionando en puerto ${port}")
})