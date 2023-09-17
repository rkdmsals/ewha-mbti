const express = require("express");
var mongoose = require("mongoose");
const SendDataRouter = express.Router();
const { Data } = require("./Data");
//특정 id의 data  저장
// SendDataRouter.post("/send", (req, res) => {
//     // const data = new Data(req.body);
//     const ObjectId = mongoose.Types.ObjectId(id);
//     // Data.insertOne({
//     //     id: ObjectId,
//     //     MBTI: req.body.MBTI,
//     // })
//     Data.save({
//         id: ObjectId,
//         MBTI: res.body.MBTI,
//     })
// });


SendDataRouter.post("/send", (req, res) => {
    BasicInfo.create(
        {
            id: ObjectId,
            MBTI: req.body.MBTI,

        },
        (err) => {
            if (err) console.log(err);
            else
                return res.json({
                    basicInfoCreate: "success",
                });
        }
    );
});
module.exports = SendDataRouter;