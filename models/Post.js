const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'Title is required']
    },
    summary: {
        type: String,
        require: [true, 'Summary is required']
    },
    content: {
        type: String,
        require: [true, 'Content is required']
    },
    cover: {
        type: String,
        require: [true, 'Banner is required']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Post', PostSchema);