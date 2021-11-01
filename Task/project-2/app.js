const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        getShortComment(comment) {
            if (comment.length < 64) {
                return comment;
            }

            return comment.substring(0, 64) + '...';
        }
    }
}));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        employees: [
            {
                employee_id:'9781593275846',
                employee_first_name: 'Abdullah',
                employee_Last_name: 'Khan',
                employee_address: 'Hyderabad',
                employee_phone:'8901957613'
            }, {
                employee_id:'9781593275847',
                employee_first_name: 'Anand',
                employee_Last_name: 'K',
                employee_address: 'Hyderabad',
                employee_phone:'8901957614'
            }, {
                employee_id:'9781593275848',
                employee_first_name: 'Amar',
                employee_Last_name: 'M',
                employee_address: 'Hyderabad',
                employee_phone:'8901957615'
            }
        ]
    });
});

app.listen(3010, () => {
    console.log('The web server has started on port 3010');
});