const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());





// __________________________________________________  \\

function verifyUser ( request, response, next ){
    const { email } = request.headers;

    const alreadyExistsEmail = users.find ((user) => user.email === email);
    if(!alreadyExistsEmail){
        return response.status(400).json({ error: 'User not found' });
    }

    request.user = alreadyExistsEmail;
    return next()

    
};


// __________________________________________________  \\









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


function stringFormatted ( string ){
    return string = string.trim().toLowerCase();
}

app.post('/books', ( request, response ) => {
    const { name, author, company, description, user_id } = request.body;

    const booksAlreadyExists = books.find( (book) => book.user_id === user_id && stringFormatted(book.name) === stringFormatted(name) )
    if (booksAlreadyExists){
        return response.status(400).json({ error: 'Book already exists' })
    }

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


app.get('/books/:id', ( request, response ) => {
    const { id } = request.params;

    const findBook = books.filter(book => {
        return book.user_id === id
    });
    return response.json(findBook)
});

app.delete('/users/:id', verifyUser, ( request, response ) => {
    const { id } = request.params

    const userIndex = users.findIndex((user) => user.id === id)
    if (!userIndex < 0){
        return response.status(400).json('User not found')
    };

    users.splice( userIndex, 1 )
    return response.json(users)
});

app.delete('books/:id', ( request, response ) => {
    const { id } = request.params;

    const book = books.findIndex((book) => book.id === id);
    if(!book < 0){
        return response.status(400).json('Book not found')
    }

    books.splice( book, 1 )
    return response.json(books)


});












app.listen(3333, () => console.log("Server is running"));

app.listen();
