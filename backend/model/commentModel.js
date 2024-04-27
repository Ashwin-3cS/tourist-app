import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
    visitedPlace: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    review: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    photo: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentsSchema);

export default Comment;