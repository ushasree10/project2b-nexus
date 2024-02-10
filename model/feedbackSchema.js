// contactSchema.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    feedback: {type:String,}
}, {
    collection:"feedback" // This adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model("Feedback", feedbackSchema);
