const express = require('express');
const cors = require('cors');

const app = express();
const port = 5001; // 伺服器監聽的端口

app.use(cors()); // 允許跨域請求

// **解決 "Cannot GET /"**
app.get('/', (req, res) => {
    res.send('let go');
});

// 測試 API 端點
app.get('/api/status', (req, res) => {
    res.json({ message: 'let go', status: 'OK' });
});

app.listen(port, () => {
    console.log(`let go http://localhost:${port}`);
});
