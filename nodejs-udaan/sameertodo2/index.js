import express, { json } from 'express';
import cors from 'cors';
import { readFile, writeFile } from './utility/FIleRW.js';

const app = express();

const corsOptions = {
    origin: ['http://localhost:3000','*'],
    optionsSuccessStatus: 200, // some legacy browsers     (IE11, various SmartTVs) choke on 204
  };

app.use(cors(corsOptions))
const port = 3001

app.use(express.json({limit: "1mb", extented: true}))
app.use(express.urlencoded({limit:"1mb", extended: true}))

app.get('', (req, res) => {
    return res.status(200).json({"message": "welcome sameer sir"});   
})


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
        return res.status(200).json(users);
    }else{
        return res.status(406).json({"message": "Users not found"});
    }
})

app.post('/register', (req, res)=>{
        const name = req.body.name;
        const username = req.body.username;
        const password = req.body.password;
        if(!name){
            return res.status(406).json({
                message:"name is required"
            })
        }
        if(!username){
            return res.status(406).json({
                message:"username is required"
            })
        }
        if(!password || password.length<8){
            return res.status(406).json({
                message:"passward must be atleast 8 charecter long"
            })

        }
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
    

    

app.post('/login', async (req, res)=>{
    console.log("login req")
    const username = req.body.username;
    const password = req.body.password;
    const users = readFile('users.json');

    const exitingUser = users.filter(element => {
        return element.username == username && element.password == password;
    });
    if(exitingUser.length>0){
        return res.status(200).json({"message": "Login Successful", user: exitingUser[0]});
    }else{
        return res.status(401).json({"message": "Invalid Credentials"});
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

app.get('/task', (req, res) => {
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


app.post('/task',(req,res)=>{
    const tasks =readFile("task.json")
    const title=req.body.title
    const desc=req.body.desc
    if( title){
        const task={
            title:title,
            desc:desc
        }
        tasks.push(task)
        writeFile(tasks,"task.json")
        res.status(200).json({"message":"task is added"})
    }else{
        res.status(401).json({"message":"task is not added"})
    }
})

app.post('/delete',(req,res)=>{
    const tasks =readFile("task.json")
    const title="kn"
    res.status(200),json({"message": tasks})
    const ondeletemodal = [];


     for(let i = 0 ; i<tasks.length; i++){
         if(title == tasks[i].title){
             console.log("data found");
             break;
         }
         else{
             console.log("data not found");
      }
     }
     if( title){
         const task={
             title:title,
             desc:desc
         }
         tasks.push(task)
         writeFile(tasks,"task.json")
         res.status(200).json({"message":"task is added"})
     }else{
         res.status(401).json({"message":"task is not added"})
     }
})
    

app.get('/task_list',(req,res)=>{
    const task_list =readFile("task.json")
    if(task_list && task_list.length>0){
        res.status(200).json(task_list)
    }else{
        res.status(406).json({"message":"object is not added"})
    }
})


       

