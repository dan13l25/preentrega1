import { Router } from "express"
import { ProductManager } from "../productManager.js"
import { productManager } from "../app"

const productRouter = Router()

productRouter.get("/api/product", async(req,res) =>{
    try{
        const {limit} = req.query
        const product = productManager.getProduct()

        if(limit){
            const limitProduct = product.slice(0, limit)
            return res.json(limitProduct)
        }
        return res.json(product)
    }catch (error){
        console.log(error)
        res.send("error al recibir producto")
    }
})

productRouter.get("/api/product/:pid", async(req,res) =>{
    try{
        const {pid} = req.params
        const product = productManager.getProductById(pid)
        res.json(product)
    }catch (error){
        console.log(error)
        res.send("error al recibir el ID del producto")
    }
})

productRouter.post("/api/product", async(req,res) =>{
    try{
        const {title, description, price, thumbnail, code, stock, status, category, id} = req.body
        const post = await productManager.addProduct({title, description, price, thumbnail, code, stock, status, category, id})
        res.json(post)
    }catch(error){
        console.log(error)
        res.send("error al recibir el ID del producto")
    }
})

productRouter.put("/api/product/:pid", async(req,res) =>{

})

productRouter.delete("/api/product/:pid", () =>{

})

export {productRouter}