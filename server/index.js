const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hey there!')
})

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})