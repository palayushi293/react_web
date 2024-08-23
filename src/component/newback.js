const express = require('express')
const app = express()
const cors=require('cors')
const collection=require("./model/Schema")
// respond with "hello world" when a GET request is made to the homepage
app.use(express.json());
app.use('cors');
app.get('/', (req, res) => {
  res.send('hello world')
})

  app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
      const newUser = new User({ email, password });
      await newUser.save();
      res.status(201).send('User created');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  en(3000,()=>
{
    console.log('server started');
});