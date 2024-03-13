const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        },
        post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
        },
        body: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);