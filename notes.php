
npm install -g express-generator
express --view=pug myapp
cd myapp
npm install
npm start
in browser localhost:3000

==============================
create new folder
npm init -y
yarn add cors express --save
create new file products-api.js

Builds a products api
{
	productId,ProductName,ManuDate,ExpDate,Price
}

Node Project -- npm init -y
install the depe
product.js -- configure all the verbs
Test it with postman





=>create new folder 
=>in that folder npm init -y
=>then add dependencies like cors,express
=>yarn add cors express --save
=>create api file like books-api.js

books-api.js:
=================
//import cors and express modules
const express = require("express")
const cors = require("cors");

//create app using express it is used to create rest services
const app = express();

//to enable ports 
app.use(cors())


//to allow corsorigin
const allowCrossOrigin = (req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
}
//Books array
let books = [{
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "author": "Marijn Haverbeke",
    "publish_date": "2014-12-14",
    "publisher": "No Starch Press",
    "numOfPages": 472,
},
{
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "publish_date": "2012-07-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 254,
},
{
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "author": "Axel Rauschmayer",
    "publish_date": "2014-02-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 460,
}];


app.use(express.urlencoded({ extended: false }));
app.use(allowCrossOrigin)
app.use(express.json());

//get Request
app.get("/",(req,res)=>{
	res.send("Get Request")
});

//get all books
app.get("/books",(req,res)=>{
	res.json(books)
});
//get particular book based on id
app.get("/books/:bid",(req,res)=>{
	const bookid = req.params.id
	for(let book as books){
		if(book.isbn===bookid){
			res.json(book);
			return;
		}
	}
	res.send(404).send("Book is not available")
})
//update particular book 
app.put("/books/:bid",(req,res)=>{
	const bookid = req.params.bid
	const newBook = req.body
	for(let i=0;i<books.length;i++){
		book[i] = book
		if(book.isbn!==bookid){
			books[i] = newBook
		}
	}
	res.send("Book is Edited")
});
//add books
app.post("/books",(req,res)=>{
	const newBook = req.body
	books.push(newBook)
	res.send("Book is added success")
})
//delete book
app.delete("/books/:bid",(req,res)=>{
	const bid = req.params.bid
	books = books.filter(book=>{
		if(book.isbn!==bid){
			return true
		}else{
			return false
		}
	})
	res.send("Book is deleted")
})
//listening port
app.listen(port,()=>{
    console.log(`Server Started successfully on port ${port}`)
})

=>run the node server
node books-api.js

===========================
Task:
	Products-api.js:
	=====================
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