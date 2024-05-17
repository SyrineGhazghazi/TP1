const express = require('express');
const app = express();
const port = 5000;
const posts = [
  {id:1,name:"syrine", lastname:"ghz"},
  {id:2,name:"Hela", lastname:"ghz"},
  {id:3,name:"Hadil", lastname:"ghz"},
  {id:4,name:"Lol", lastname:"ghz"},]

// QS1 
app.get('/auth/login', (req, res) => {
res.send(`<form action="/login" method="post">
<label for="username">Nom d'utilisateur:</label>
<input type="text" id="username" name="username"><br><br>
<label for="password">Mot de passe:</label>
<input type="password" id="password" name="password"><br><br>
<input type="submit" value="Se connecter">
</form>`)
});

//QST 2 
app.get('/auth/register', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

//QST3
app.get('/post/all', (req, res) => {
  res.send(posts);
});


//QST4
app.get('/post/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (post) {
      res.json(post);
  } else {
      res.status(404).json({ error: 'Post not found' });
  }})


app.get('/', (req, res) => {
  res.send('login');
});
app.listen(port,()=> {
  console.log(`listening on port ${port}}`)
})
