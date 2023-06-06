const express = require("express");

const app = express()
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request.method);
    response.status(200).json({
        message: 'First aplication'
    });
});

app.listen(3333, () => console.log('Server is running'))