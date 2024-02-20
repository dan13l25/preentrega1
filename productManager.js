import { promises as fs } from "fs";
import path from "path";

export class ProductManager {

    constructor() {
        this.path = path.join(__dirname, "productlist.json");
        this.products = [];
    }
    static id = 0;

    writeProductsToFile = async () => {
        await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
    };

    addProduct = async (title, description, price, thumbnail, code, stock, category) => {
        ProductManager.id += 1;
    
        if (title && description && price && thumbnail && code && stock && category !== undefined) {
            const product = {
                title,
                description,
                price,
                thumbnail,
                code,
                category,   
                stock,
                id: ProductManager.id
            };
            this.products.push(product);
    
            await this.writeProductsToFile();
        } 
    }

    readProducts = async () => {
        try {
            let dataProduct = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(dataProduct);
        } catch (error) {
            console.error("Error al leer o parsear el archivo:", error.message);
            return [];
        }
    }

    getProduct = async () => {
        let reply = await this.readProducts();
        return await console.log(reply);
    }

    getProductById = async (id) => {
        let getId = await this.readProducts();
        let filter = getId.find(product => product.id === id);
        console.log(filter);
    }

    deleteProductById = async (id) => {
        let erase = await this.readProducts();
        let productFiltered = erase.filter(products => products.id !== id);
        await fs.writeFile(this.path, JSON.stringify(productFiltered, null, 2));
        console.log("Producto eliminado");
    }

    updateProduct = async ({ id, ...newProductData }) => {
        await this.deleteProductById(id);
        let oldProducts = await this.readProducts();
        let modifyProduct = [{ ...newProductData, id }, ...(oldProducts || [])];
        await fs.writeFile(this.path, JSON.stringify(modifyProduct, null, 2));
    }
}