const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

//MongoDB接続
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB接続成功'))
    .catch(err => console.error('MongoDB接続エラー', err));
    
//仮のルート
app.get('/', (req, res) => {
    res.send('バックエンド準備OK');
});


 const POST = process.env.POST || 3000;
 app.listen(POST, () => console.log('サーバー起動中'))