const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    maxUse: {
      // 5
      type: Number,
      required: true,
    },
    uses: {
      type: Number,
      required: true,
      default: 0, // به صورت خودکار صفر
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Discount || mongoose.model("Discount", schema);

export default model;
