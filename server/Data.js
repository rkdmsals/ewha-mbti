const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, },
    MBTI: { type: Number, require: true },
})

const Data = mongoose.model("Data", dataSchema);
module.exports = { Data };