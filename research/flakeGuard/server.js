const express = require('express'); 
const app = express(); 
const port = 3001; 

// JSON parsing middleware
app.use(express.json())

// Listen for results post requests from users
app.post('/results', (req, res) => {
  console.log(req.body);
  res.status(200).send();
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});
