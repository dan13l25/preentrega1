import { Router } from "express"
import { productManager } from "../app.js"

const productRouter = Router()

productRouter.get("/", async(req,res) =>{
    try{
        const {limit} = req.query
        const product = await productManager.getProduct()

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

productRouter.get("/", async(req,res) =>{
    try{
        const {pid} = req.params
        const product = await productManager.getProductById(pid)
        res.json(product)
    }catch (error){
        console.log(error)
        res.send("error al recibir el ID del producto")
    }
})

productRouter.post("/api/product", async(req,res) =>{
    try{
        const {title, description, price, thumbnail, code, stock, status = true, category} = req.body
        const post = await productManager.addProduct({title, description, price, thumbnail, code, stock, status, category, id})
        res.json(post)
    }catch(error){
        console.log(error)
        res.send("error agregar producto")
    }
})

productRouter.put("/update/:pid", async(req,res) =>{
    const {pid} = req.params
    
    try{
        const {title, description, price, thumbnail, code, stock, status = true, category } = req.body
        const response = await productManager.updateProduct(pid, {title, description, price, thumbnail, code, stock, status, category})
        res.json(response)
    }catch(error){
        console.log(error)
        res.send("error al actualizar producto")
    }
})

productRouter.delete("/delete/:pid", async(req,res) =>{
    const {pid} = req.params

    try{
        await productManager.deleteProductById(pid)
        res.send("producto eliminado")
    }catch(error){
        console.log(error)
        res.send("error al eliminar producto")
    }
})

export {productRouter}