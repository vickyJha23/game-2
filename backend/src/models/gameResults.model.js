const { required } = require('joi');
const mongoose = require('mongoose');

const gameResultSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    creatorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    XA: {
      type: String,
      required: true,
    },
    XB: {
      type: String,
      required: true,
    },
    XC: {
      type: String,
      required: true,
    },
    XD: {
      type: String,
      required: true,
    },
    XE: {
      type: String,
      required: true,
    },
    XF: {
      type: String,
      required: true,
    },
    XG: {
      type: String,
      required: true,
    },
    XH: {
      type: String,
      required: true,
    },
    XI: {
      type: String,
      required: true,
    },
    XJ: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const gameResult = mongoose.model("gameResult", gameResultSchema);
module.exports = gameResult;