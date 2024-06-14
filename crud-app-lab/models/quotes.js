const mongoose = require("mongoose");

// quotes schema
const quoteSchema = new mongoose.Schema(
  {
    quote: { type: String, required: true },
    author: { type: String },
    category: { type: String },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// quote model
const Quote = mongoose.model("Quote", quoteSchema);

// export model
module.exports = Quote;
