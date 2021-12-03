const express = require('express')
const cors = require('cors');

const app = express()
const port = 4500

//Get Post Put Delete -- Test and Say Done

let products = [{
    "product_id": "111",
    "product_name": "T-short",
    "manufacture_date": "2021-10-29",
    "exp_date": "2023-10-29",
    "price": "200",
},
{
    "product_id": "222",
    "product_name": "short",
    "manufacture_date": "2021-10-28",
    "exp_date": "2023-10-28",
    "price": "300",
},
{
    "product_id": "333",
    "product_name": "Paint",
    "manufacture_date": "2021-10-27",
    "exp_date": "2023-10-27",
    "price": "400",
},
{
    "product_id": "444",
    "product_name": "Jeans",
    "manufacture_date": "2021-10-26",
    "exp_date": "2023-10-26",
    "price": "500",
},
{
    "product_id": "555",
    "product_name": "auto_part",
    "manufacture_date": "2021-10-25",
    "exp_date": "2023-10-25",
    "price": "2000",
}];

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(cors());

app.use(allowCrossDomain);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/product', (req, res) => {
    const product = req.body;

    products.push(product);

    res.send('Product is added in database');
});

app.get('/product', (req, res) => {
    res.json(products);
});

app.get('/product/:product_id', (req, res) => {
    const isbn = req.params.isbn;

    for (let product of products) {
        if (product.product_id === product_id) {
            res.json(product);
            return;
        }
    }

    //sening 404 when not found
    res.status(404).send('Product Not Found');
});

app.put('/product/:product_id', (req, res) => 
{
    //required product_id from the url
    const product_id = req.params.product_id;
    const newProduct = req.body;

    //remove item from the product array
    for(let i = 0; i < products.length; i++) {
        let product = products[i]

        if (product.product_id === product_id) {
            products[i] = newProduct;
        
        }
    }

    //send 404 when not found something is a good practice
    res.send('Product is edited');
});

app.delete('/product/:product_id', (req, res) => 
{
    //required product_id from the url
    const product_id = req.params.product_id;
    const newProduct = req.body;

    //remove item from the product array
    products = products.filter(i => {
        if (i.product_id !== product_id) {
            return true;
        }
        return false;
    })

    //send 404 when not found something is a good practice
    res.send('Product is deleted');
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
