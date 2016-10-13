import * as Express from 'express';

var app = Express();

app.get('/', (request, response) => {
    response.send('Hello world!');
});

let port = 4500;

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});