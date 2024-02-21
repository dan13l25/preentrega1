import express from "express";
import { ProductManager } from "./productManager.js";
import { cartManager } from "./cartManager.js";
import { productRouter } from "./routes/productRoute.js";
import { cartRouter } from "./routes/cartRoute.js";

const app = express();
const port = 8080;

export const productManager = new ProductManager();
export const cartManagerInstance = new cartManager();

app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(port, () => {
    console.log(`servidor funcionando en puerto ${port}`);
});