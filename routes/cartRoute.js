import { Router } from "express"
import { cartManagerInstance } from "../app.js"

const cartRouter = Router()

cartRouter.post("/", async(req,res) =>{
    try{
        const cartPost = await cartManagerInstance.newCart()
        res.json(cartPost)
    }catch(error){
        res.send("error al crear carrito")
    }
})

cartRouter.get("/:cid", async(req,res) =>{
    const {cid} = req.params
    try{
        const cartGet = await cartManagerInstance.getCartProduct(cid)
        res.json(cartGet)
    }catch(error){
        res.send("error al enviar producto del carrito")
    }
})

cartRouter.post("/:cid/product/:pid", async(req,res) =>{
    const {cid,pid} = req.params
    try{
        await cartManagerInstance.addProductToCart(cid, pid)
        res.send("producto agregado")
    }catch(error){
        res.send("error al guardar producto en carrito")
    }
})

export {cartRouter}