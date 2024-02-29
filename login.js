const express = require('express'); 
const cors = require('cors'); // Import the cors middleware
const app = express();

app.use(cors());

app.get('/', (req, res) => 
{ const userData = {
     user: { name: 'pradeep' },
     token: 'sdfdsfsf' 
    };
    res.json(userData); 
});

// Enable CORS for all routes 

// Define the user route

    
// Start the server 
app.listen(3001, () => {
     console.log('Server listening on port 3001'); 
    });