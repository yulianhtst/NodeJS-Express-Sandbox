const app = require('express')()
const port = 5000;

app.get('/', (req, res) => {
    console.log(`inside get`)
    res.send('hello to my frind')
})
app.post('/cats', (req, res) => {
    console.log(`create a cat `);
})
app.all('/', (req, res) => {
console.log('All requests');
})





app.listen(port, () => console.log(`This server is running on port ${port}`))