const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true }
)

const hootSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    tect: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['News', 'Sports', 'Games', 'Movies', 'Music', 'Television']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [commentSchema] //embedded comment schema
},
    { timestamps: true }
)

const Hoot = mongoose.model('Hoot', hootSchema)
module.exports = Hoot