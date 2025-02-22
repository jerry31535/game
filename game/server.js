const express = require('express');
const cors = require('cors');

const app = express();
const port = 5001; // ���A����ť���ݤf

app.use(cors()); // ���\���ШD

// **�ѨM "Cannot GET /"**
app.get('/', (req, res) => {
    res.send('let go');
});

// ���� API ���I
app.get('/api/status', (req, res) => {
    res.json({ message: 'let go', status: 'OK' });
});

app.listen(port, () => {
    console.log(`let go http://localhost:${port}`);
});
