const express = require('express');
const app = express();
const cors = require('cors');
const port = 4401

let products = [{
    "product_id": "1",
    "product_name": "Product 1",
    "manufacture_date": "2014-02-01",
    "expiry_date": "2014-09-01",
    "price": "1000"
}, {
    "product_id": "2",  
    "product_name": "Product 2",
    "manufacture_date": "2013-02-01",
    "expiry_date": "2014-09-01",
    "price": "1500"
}];
const allowCrossOrigin = (req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
} 
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(allowCrossOrigin)
app.use(express.json());

app.get("/",(req, res) => {
    res.send("Products GetData");
})
app.get("/products",(req, res) => {
    res.json(products);
})
app.get("/products/:pid",(req, res) => {
    const pid = req.params.pid
    for (let product of products) {
        if(product.product_id === pid) {
            res.json(product)
            return;
        }
    }
    res.status(404).send("Product is not found")
})
app.post('/products',(req,res)=>{
    const product = req.body;
    products.push(product)
    res.send("Product is added successfully")
})
app.put('/products/:id',(req,res)=>{
    const newProduct = req.body;
    const id = req.params.id;
    for(let i=0; i<products.length; i++){
        const product = products[i]
        if(product.product_id === id){
            products[i] = newProduct
        }
    }
    res.send("Product is Edited")
})
app.delete('/products/:id',(req,res)=>{
  const id = req.params.id
  products = products.filter(product =>{
      if(product.product_id !== id){
          return true;
      }else{
          return false;
      }
  })  
  res.send("Product is Deleted") 
})
app.listen(port,()=>{
    console.log(`Server Started successfully on port ${port}`)
})