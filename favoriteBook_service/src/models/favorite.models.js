const mongoose = require('mongoose');
const schema = mongoose.Schema;

let favoriteSchema = new schema({

    title: { type: String },
    key: { type: String },
    author: { type: String },
    image_name: { type: String },
    created: {
        type: { type: String },
        value: { type: String }
    },
    last_modified: {
        type: { type: String },
        value: { type: String }
    }
})

module.exports = mongoose.model('FavoriteBook', favoriteSchema);