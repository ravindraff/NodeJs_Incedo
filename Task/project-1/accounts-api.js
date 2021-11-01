let express = require('express');
let cors = require('cors');

const app = express();
const port= 4400

let accounts = [{
    "AccountId": "9781593275846",
    "CustomerName": "Ram",
    "Balance": "15000",
    "CustAddress": "Hyderabad",
    "CustPhone": "9087654321"
},{
    "AccountId": "9781593275847",
    "CustomerName": "Ajay",
    "Balance": "25000",
    "CustAddress": "Hyderabad",
    "CustPhone": "9087654322"
},{
    "AccountId": "9781593275848",
    "CustomerName": "Venkat",
    "Balance": "35000",
    "CustAddress": "Hyderabad",
    "CustPhone": "9087654323"
},{
    "AccountId": "9781593275846",
    "CustomerName": "Raja",
    "Balance": "23000",
    "CustAddress": "Hyderabad",
    "CustPhone": "9087654324"
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


app.get('/accounts',(req,res)=>{
    res.json(accounts);
})
app.post('/accounts',(req,res)=>{
    const account = req.body
    accounts.push(account);
    res.send("account is added to database")
})
app.get('/accounts/:accountid',(req,res)=>{
    const accountid = req.params.accountid
    for(let account of accounts){
        if(account.AccountId == accountid){
            res.json(account)
            return;
        }
    }
    res.status(404).send("account Not Found")

})
app.delete('/accounts/:accountid',(req,res)=>{
    const accountid = req.params.accountid;
    accounts = accounts.filter(account =>{
        if(account.AccountId !== accountid){
            return true;
        }else{
            return false;
        }
    })
    res.send("account is deleted")
})
app.put('/accounts/:accountid',(req,res)=>{
    const accountid = req.params.accountid
    const newaccount = req.body
    for (let i=0;i<accounts.length;i++){
        let account = accounts[i]
        if(account.AccountId === accountid){
            accounts[i] = newaccount
        }
    }
    res.send("account is Edited")
})
app.listen(port,()=>{
    console.log(`Server Started successfully on port ${port}`)
})
//app.listen(`Server Started successfully on port ${port}`);

