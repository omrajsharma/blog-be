const fs = require('fs');
const Post = require('../models/Post')

const createPost = async (req, res) => {
    const {title, summary, content} = req.body;

    if (!title || !summary || !content) {
        res.status(400).end('title, summary and content can not be empty');
        return
    }
    if (req.file == undefined) {
        res.status(400).end('Please add cover images')
        return
    }
    if (title.length < 3 && title.length >= 100) {
        res.status(400).end('title should be greater than 3 characters and less than equals to 100 characters')
        return
    }
    if (summary.length < 30 && summary.length >= 300) {
        res.status(400).end('summary should be greater than 30 characters and less than equals to 300 characters')
        return
    }
    if (content.length < 30 && summary.length >= 50000) {
        res.status(400).end('content should be greater than 30 characters or your content is too large')
        return
    }

    const {originalname, path} = req.file;
    const originalnameParts = originalname.split('.');
    const fileExtension = originalnameParts[originalnameParts.length -1];
    const newPath = path + '.' + fileExtension;
    fs.renameSync(path, newPath);

    const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
    })

    res.json(postDoc)
}

module.exports = {createPost}