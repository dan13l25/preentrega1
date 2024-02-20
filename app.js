import express from "express";
import { ProductManager } from "./productManager.js";
import { productRouter } from "./routes/productRoute.js";

const app = express();
const port = 8080;

export const productManager = new ProductManager();

app.use("/api/product", productRouter);
app.use(express.json());

app.listen(port, () => {
    console.log(`servidor funcionando en puerto ${port}`);
});