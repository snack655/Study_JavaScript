const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use((req, res, next)=> {
    console.log('존재하지 않는 주소입니다.');
    const error = new Error('존재하지 않는 주소입니다.');
    error.status = 404;
    next(error);
});

app.use((err, req, res) => {
    res.send(err.message);
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
});