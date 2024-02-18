import express from express
import UUID from "node:crypto"
import fs from "fs"

const app = express()
const port = 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/api/products", () =>{

})

app.get("/api/products/:pid", () =>{

})

app.post("/api/products", () =>{

})

app.put("/api/products/:pid", () =>{

})

app.delete("/api/products/:pid", () =>{

})

app.post("/api/carts/", () =>{

})

app.get("/api/carts/:cid/", () =>{

})

app.post("/api/carts/:cid/product/:pid", () =>{

})