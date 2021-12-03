const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// app.engine('hbs', exphbs({
//     defaultLayout: 'main',
//     extname: '.hbs'
// }));

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        getShortComment(comment) {
            if (comment.length < 64) {
                return comment;
            }

            return comment.substring(0, 61) + '...';
        }
    }
}));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        post: [{
            EmployyId: '11111',
            EmpFN: 'Satyajeet',
            EmpLN: 'Dey',
            Adrreess: '#306, vinamra khand',
            PhoeNo: '1234567890'
        },
        {
            EmployyId: '22222',
            EmpFN: 'Ajay',
            EmpLN: 'Singh',
            Adrreess: '#307, vinamra khand',
            PhoeNo: '1234567890'
        },
        {
            EmployyId: '33333',
            EmpFN: 'Gopal',
            EmpLN: 'Thakur',
            Adrreess: '#308, vinamra khand',
            PhoeNo: '1234567890'
        },
        {
            EmployyId: '44444',
            EmpFN: 'Ajay',
            EmpLN: 'Reddy',
            Adrreess: '#309, vinamra khand',
            PhoeNo: '1234567890'
        }
    ]
    });
});


app.listen(4000, () => {
    console.log('The web server has started on port 4000');
});