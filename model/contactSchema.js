// contactSchema.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    message: { type: String },
}, {
    collection:"people" // This adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model("Contact", contactSchema);
