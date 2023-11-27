const express = require('express')
const app = express()
const port = 3000

function sum(a, b){ 
    return Number(a)+Number(b);
}

app.get('/handleSum', (req, res) => {
    var a = req.query.a; 
    var b = req.query.b;
    var ans = sum(a, b);
    res.send(`Hello World! ${ans}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})


