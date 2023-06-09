const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

const users = []
const books = []

app.post('/users', ( request, response ) => {
    const { name, email } = request.body;

    const emailAlreadyExists = users.some( (user) => user.email === email )
    if(emailAlreadyExists){
        return response.status(400).json({error: 'User already exists.'})
    }
    users.push({
        name,
        email, 
        id: uuid(),
    });
    return response.status(201).json({message: 'Ok'})

});

app.get('/getUsers', ( request, response ) => {
    return response.status(200).json(users)
});

app.post('/books', ( request, response ) => {
    const { name, author, company, description, user_id } = request.body;

    books.push({
        name,
            author, 
                company,
            description,
            id: uuid(),
        user_id,
    });

    return response.status(201).json({ message: 'OK' })
});

app.put('/users/:id', ( request, response ) => {
    const { id } = request.params
    // console.log(id)
    const { name } = request.body;

    const findUser = users.find( user => user.id === id )


    findUser.name = name
    return response.json(users);
})


app.get('/books/:id', (request, response) => {
    const { id } = request.params;

    const findBook = books.filter(book => {
        return book.user_id === id
    });
    return response.json(findBook)
})




app.listen(3333, () => console.log("Server is running"));

app.listen();
