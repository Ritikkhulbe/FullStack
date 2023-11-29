const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());
function sum(num){ 
    var sum = 0;
    for(let i = 1;i<=num;i++){
        sum += i;
    }
    return sum;    
}

app.get('/h', (req, res) => {
    var a = req.query.num;
    var obj = {
        sum: sum(a)
    }
    res.send(obj)
})

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})


