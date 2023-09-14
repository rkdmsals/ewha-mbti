"use strict";
require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const router = express.Router();
const MongoStore = require("connect-mongo");
//.env 파일에서 변수값 가져오기
const { PORT, MONGO_URI } = process.env;

//mongoose 이용해 mongoDB 연결
// var autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(mongoose.connection);
mongoose.set("strictQuery", false);
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    )
    .then(() => console.log('MongoDB conected'))
    .catch((err) => {
        console.log("mongoDB error");
        console.log(err);
    });
//port 연결
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

//Router 가져오기
const SendDataRouter = require("./SaveData");

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.json());

//경로별 라우터 추가하기
app.use('/api/data', SendDataRouter);// 데이터 전송 라우터를 경로에 추가
app.get('/', (req, res) => {
    res.render("../client/build/index.html");
})

module.exports = router;