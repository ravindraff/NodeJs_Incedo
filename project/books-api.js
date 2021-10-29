let express = require('express');
let cors = require('cors');

const app = express();
const port= 4400

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

var allowCrossOrigin = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE")
    res.header('Access-Control-Allow-Headers',"Content-Type");
    next();
}
app.use(cors());
app.use(allowCrossOrigin);
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/books',(req,res)=>{
    res.json(books);
})
app.post('/books',(req,res)=>{
    const book = req.body
    books.push(book);
    res.send("Book is added to database")
})
app.get('/books/:bookid',(req,res)=>{
    const bookid = req.params.bookid
    for(let book of books){
        if(book.isbn == bookid){
            res.json(book)
            return;
        }
    }
    res.status(404).send("Book Not Found")

})

app.listen(port,()=>{
    console.log(`Server Started successfully on port ${port}`)
})
//app.listen(`Server Started successfully on port ${port}`);

