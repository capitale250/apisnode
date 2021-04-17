import express from 'express'
import bodyparser from'body-parser'
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users =[]
  



router.get('/', (req, res) => {
    
    res.render('index.ejs');
     
});
router.get('/users', (req, res) => {
   
    res.send(users);
    
    console.log(users)
   
     
});


router.post('/',function (req,res) {
    console.log(req.body);
	var personInfo = req.body;
   



    users.push({...personInfo,id:uuidv4()})

    res.send(`user with the name ${personInfo.firstname} is added`);
    
    console.log(req.body)
    
})
router.get('/:id',(req,res) => {
    const {id} = req.params;

    const finduser=users.find((user)=> user.id==id);
    res.render('data.ejs', {"firstname":finduser.firstname,"lastname":finduser.lastname});
    res.send(finduser)
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=> user.id !== id);
    res.send(`user with the name ${id} is deleted`)
})
router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const {firstname,lastname,age}=req.body;
    const finduser=users.find((user)=> user.id==id);

    if(firstname) user.firstname=firstname;
    if(lastname) user.lastname=lastname;
    if(age) user.age=age;

   
    res.send(`user with the name ${id} is updated`)
})

export default router;