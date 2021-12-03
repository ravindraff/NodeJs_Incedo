const express = require('express')
const cors = require('cors');

const app = express()
const port = 4600

//Get Post Put Delete -- Test and Say Done

let accountdetals = [{
    "account_id": "111",
    "customerName": "Satyajeet dey",
    "Balance": "11000",
    "CustAdress": "#305, vinamra khand",
    "CustPhone": "1234567890",
},
{
    "account_id": "111",
    "customerName": "Satyajeet",
    "Balance": "12000",
    "CustAdress": "#306, vinamra khand",
    "CustPhone": "1234567890",
},
{
    "account_id": "222",
    "customerName": "dey",
    "Balance": "13000",
    "CustAdress": "#307, vinamra khand",
    "CustPhone": "01111111",
},
{
    "account_id": "333",
    "customerName": "Satya",
    "Balance": "14000",
    "CustAdress": "#308, vinamra khand",
    "CustPhone": "1212121212",
},
{
    "account_id": "444",
    "customerName": "Saty",
    "Balance": "10000",
    "CustAdress": "#309, vinamra khand",
    "CustPhone": "1231231231",
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

app.post('/accountdetal', (req, res) => {
    const accountdetal = req.body;

    accountdetals.push(accountdetal);

    res.send('accountdetal is added in database');
});

app.get('/accountdetal', (req, res) => {
    res.json(accountdetals);
});

app.get('/accountdetal/:account_id', (req, res) => {
    const isbn = req.params.isbn;

    for (let accountdetal of accountdetals) {
        if (accountdetal.account_id === account_id) {
            res.json(accountdetal);
            return;
        }
    }

    //sening 404 when not found
    res.status(404).send('accountdetal Not Found');
});

app.put('/accountdetal/:account_id', (req, res) => 
{
    //required account_id from the url
    const account_id = req.params.account_id;
    const newAccountdetal= req.body;

    //remove item from the accountdetal array
    for(let i = 0; i < accountdetals.length; i++) {
        let accountdetal = accountdetals[i]

        if (accountdetal.account_id === account_id) {
            accountdetals[i] = newAccountdetal;
        
        }
    }

    //send 404 when not found something is a good practice
    res.send('accountdetal is edited');
});

app.delete('/accountdetal/:account_id', (req, res) => 
{
    //required account_id from the url
    const account_id = req.params.account_id;
    const newAccountdetal = req.body;

    //remove item from the accountdetal array
    accountdetals = accountdetals.filter(i => {
        if (i.account_id !== account_id) {
            return true;
        }
        return false;
    })

    //send 404 when not found something is a good practice
    res.send('accountdetal is deleted');
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
