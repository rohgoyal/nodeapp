const express = require('express')
const app = express()

app.get('/hello', function(req, res){
  var obj = {}
  obj.version = '1.0'
  obj.incomingHeaders = req.headers
  res.send(JSON.stringify(obj))
})
// => res.send(JSON.stringify({version:'1.0', message:'Hello World!'})))

app.listen(3000, () => console.log('Node.js app listening on port 3000.'))
