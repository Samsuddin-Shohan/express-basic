const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
let users = [
    {'id': 0, 'name':'shohan','dept':'cse'},
    {'id': 1, 'name':'arif','dept':'cse'},
    {'id': 2, 'name':'sharif','dept':'cse'},
    {'id': 3, 'name':'niloy','dept':'cse'},
    {'id': 4, 'name':'walid','dept':'cse'}
];

app.get('/users', (req, res) => {
  const search = req.query.search;
  if(search){
    const searchedUser = users.filter(user =>user.name.toLocaleLowerCase().includes(search) );
    res.send(searchedUser);
  }
  else{
      res.send(users);
  }
});
app.get('/users/:id', (req,res)=>{
    id = req.params.id;
    res.send(users[id]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})