//uploads Node.js "http" module
const http = require("http");
//sets host as local machine
const host = 'localhost';
//sets listening port as 8000
const port = 8000;

//creates listening server at the local machine's port 8000
const requestListener = function (req, res) 
{
    
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});