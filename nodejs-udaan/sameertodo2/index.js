import express from 'express';
import { readFile, writeFile } from './utility/FIleRW.js';

const app = express();
const port = 3000

app.use(express.json({limit: "1mb", extented: true}))
app.use(express.urlencoded({limit:"1mb", extended: true}))

app.post('/hw', (req, res) => {
    const name = req.body.name;
    const pass = req.body.pass;
    if(name.toLowerCase()  == "sameer"){
        if(pass == "2580"){
            res.status(200).json({"message": "welcome sameer sir"});
        }else{
            res.status(401).json({"message": "pass is invalid"});
        }
    }else{
        res.status(406).json({"message": "name is invalid"});
    }
})


app.get('/users', (req, res)=>{
    const users = readFile('users.json');
    if(users && users.length>0){  
        res.status(200).json(users);
    }else{
        res.status(406).json({"message": "Users not found"});
    }
})

app.post('/user', (req, res)=>{
        const name = req.body.name;
        const username = req.body.username;
        const password = req.body.password;
        const user = {
            name: name,
            username: username,
            password: password
        }
        const users = readFile('users.json');
        const exitingUser = users.filter(element => {
            return element.username == username;
        });
        if(exitingUser.length>0){
            res.status(406).json({"message": "User already exist"});
        }else{
            users.push(user);
            writeFile(users, "users.json")
            res.status(200).json({"message": "User added successfully"});
        }
        
    })

    

app.post('/login', (req, res)=>{
        const username = req.body.username;
        const password = req.body.password;
        const users = readFile('users.json');
        const exitingUser = users.filter(element => {
            return element.username == username && element.password == password;
        });
        if(exitingUser.length>0){
            res.status(200).json({"message": "Login Successful", user: exitingUser[0]});
        }else{
            res.status(401).json({"message": "Invalid Credentials"});
        }
    })
    
app.post('/tasker', (req, res) => {
    const title = req.body.title;
    const desc = req.body.desc;
    if(title){
        const task = {
            title : title,
            desc : desc,
            created_at: new Date(),
        }
        const tasks = readFile('task.json');
        const exitingUser = tasks.filter(element => {
            return element.title == title;
        });
        if(exitingUser.length>0){
            res.status(406).json({"message": "Task already exist"});
        }else{
            tasks.push(task);
            writeFile(tasks, "task.json")
            res.status(200).json({"message": "Task added successfully"});
        }
    }
    
})

app.get('/tasker', (req, res) => {
    const tasks = readFile('task.json')
    if(tasks && tasks.length>0){  
        res.status(200).json(tasks);
    }else{
        res.status(406).json({"message": "task not found"});
    }
})



app.listen(port, () => {
    console.log(`running on port ${port}`)
})



    



        

