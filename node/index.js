const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle course</h1>')
})

app.listen(port, ()=> {
    console.log('App de exemplo escutando na porta ' + port)
})