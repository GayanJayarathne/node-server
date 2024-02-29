const express = require('express'); 
const cors = require('cors');

// Import the cors middleware

const app = express();
app.use(cors());

app.get('/api/tenant/4', (req, res) => 
{ const data = {
    success: 'true',
    message: 'sss',
    result: {
        id:1,
        name: 'Mickisoft Live',
        host: 'localhost:3000'}, 
    };
    res.json(data); 
});

app.post('/api/Users/Authenticate', (req, res) => 
{ const userData = {
     appUser: { name: 'pradeep',
                email: 'admin@admin.com' },
     access_Token: 'sdfdsfsf' 
    };
    res.json(userData); 
});

    
// Start the server 
app.listen(3000, () => {
     console.log('Server listening on port 3000'); 
    });