const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ info: 'Docker is easy 🐳' }) 
);

app.get('/status', (req, res ) => 
    res.json({ info: 'System operational', request: req.rawHeaders }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
