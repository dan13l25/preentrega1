import { Router } from "express"
import { cartManager } from "../app.js"

const cartRouter = Router()

cartRouter.post("/", async(req,res) =>{
    try{
        const cartPost = await cartManager.newCart()
        res.json(cartPost)
    }catch(error){
        res.send("error al crear carrito")
    }
})

cartRouter.get("/:cid", async(req,res) =>{
    const {cid} = req.params
    try{
        const cartGet = await cartManager.getCartProduct(cid)
        res.json(cartGet)
    }catch(error){
        res.send("error al enviar producto del carrito")
    }
})

cartRouter.post("/:cid/product/:pid", async(req,res) =>{
    const {cid,pid} = req.params
    try{
        await cartManager.addProductToCart(cid, pid)
        res.send("producto agregado")
    }catch(error){
        res.send("error al guardar producto en carrito")
    }
})

export {cartRouter}