let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('login')
});

app.listen(3500);