const express = require('express')
var fs = require("fs")
const app = express()
const port = 3000

app.set('json spaces', 2)

app.get('/lista', (req, res) => {
//   res.send('Hello Ruben!')
    // res.json(
    //     {
    //         "Title": "Hola mundo"
    //     }
    // )
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})