import express from "express"
import ProductManager from "./productManager.js";


const manager = new ProductManager("../productos/prodicts.json")
const app = express()
const PORT = 5000;

app.get("/products",async(req,res) => {
    const {limit} = req.query
    const products = await manager.getProducts()
    if(limit){
     const limitproducts=products.slice(0,limit)
     res.json(limitproducts)

    }
    else{
        res.json(products)
    }
})

app.get("/products/:id",async(req,res)=>{
    const {id} = req.params
    const products = await manager.getProducts()
    const productfind=products.find(elemento=>elemento.id===parseInt(id))
    console.log(productfind)
    res.send(productfind)
})


app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})