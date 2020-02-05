const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/names', (req, res) => {
    const name = ['Anna', 'Johan'];
    res.send(name);
});
app.listen(PORT, () => console.log('running'));
