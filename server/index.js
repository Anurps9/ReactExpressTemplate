const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})