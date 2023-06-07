const express = require("express");
const { v4: uuid } = require("uuid");
const app = express();
app.use(express.json());

<<<<<<< HEAD
const users = []
const books = []

app.post('/users', (request, response) => {
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

app.get('/getUsers', (request, response) => {
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
=======
const users = [];

app.post("/users", (request, response) => {
  const { name, email } = request.body;

  const emailAlreadyExists = users.some((user) => user.email === email);
  if (emailAlreadyExists) {
    return response.status(400).json({ error: "User already exists." });
  }
  users.push({
    name,
    email,
    id: uuid(),
  });
  return response.status(201).json({ message: "Ok" });
>>>>>>> f0f7f71b104ce662407bd4ac7b8226561dab14e6
});

app.listen(3333, () => console.log("Server is running"));

app.listen();
