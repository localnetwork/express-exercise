const express = require('express'); 


const app = express(); 

app.use(express.json());

const users = [
    {
        name: "John Doe",
    }, 
    {
        name: "Jane Doe",
    },
    {
        name: "Peter Co"
    },
    {
        name: "Mark Jaypee"
    }
]

app.get('/users', (req, res, next) => {
    res.json({
        data: users
    })
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params; 
    res.json({
        user: users[id] 
    }) 
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params; 
    res.json({
        message: "User deleted successfully",
        data: users[id] 
    }) 
    users.splice(id, 1)
})


app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    if(!name) {
        return res.status(422).json({
            message: "Name is required"
        })
    }
    
    users[id] = { name }


    return res.json({
        message: "User updated successfully",
        data: users[id] 
    }) 
})


app.post('/users', (req, res) => {
    const { name } = req.body; 
    users.push({name})

    res.json({
        message: "User added successfully",
        data: users
    }) 
}) 
 
app.listen(3000, () => {
    console.log('http://localhost:3000')
})