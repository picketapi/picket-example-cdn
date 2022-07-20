const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/js-cdn-example.html');
});

app.get('/gated-content', function(req, res){
    res.sendFile(__dirname + '/public/gated-content-simple.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})