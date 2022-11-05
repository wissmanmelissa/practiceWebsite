//uploads Node.js "http" module
const http = require('http');
//sets host as local machine
const host = 'localhost';
//sets listening port as 80
const port = 80;

//creates listening server at the local machine's port 8000
const requestListener = function (req, res) 
{
    if(req.method == 'POST')
    {
        console.log(`Request made`);
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => 
{
    console.log(`Server is running on http://${host}:${port}`);
});