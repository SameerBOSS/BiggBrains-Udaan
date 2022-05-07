const express = require('express')
const app = express()
const port = 3000

app.use(express.json({limit: "1mb",  extended: true}))
app.use(express.urlencoded({limit: "1mb",  extended: true}))

const friends = []

app.get('/hello_world',(req, res) => {
    res.send('Hi I Am Sameer')
})

app.get('/about_me',(req, res)=>{
    const sameer = {
        name:'sameer',
        age:'13'
    }
    res.send(sameer)
})

app.post("/add_friend", (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const friend = {
        name: name,
        age: age
    }
    friends.push(friend)
    res.send(friends)
})

app.listen(port, () =>{
    console.log('server_is_running')
})