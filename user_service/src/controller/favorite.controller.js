let favoriteModel = require('../models/favorite.models');

module.exports.addFavorite = async (req, res) => {
    try {
        let { publishers, number_of_pages, covers, key, authors, ocaid, contributions, languages, source_records, title, identifiers, isbn_13, local_id, publish_date, works, type, first_sentence, latest_revision, revision,
            created, last_modified } = req.body;

        let favoriteBook = await favoriteModel.find({ key: key });
        console.log(favoriteBook)
        if (favoriteBook.length > 0) {
            res.send({
                success: false,
                msg: "Book already added in favorite"
            })
        } else {
            let favoriteBookObj = {
                publishers, number_of_pages, covers, key, authors, ocaid, contributions, languages, source_records, title, identifiers, isbn_13, local_id, publish_date, works, type, first_sentence, latest_revision, revision, created, last_modified
            }
            let newFavoriteBook = new favoriteModel(favoriteBookObj);
            let result = await newFavoriteBook.save();
            res.send({
                success: true,
                msg: "Book added to favorite",
                book: result             
            })
        }
    }
    catch (err) {
        res.send({
            success: false,
            error: err
        });
    }
}

module.exports.getFavoriteBooks = async (req, res) => {    
    try {
        console.log("In get favorite");
        let favoriteBooks = await favoriteModel.find();
        console.log("After find  favorite");
        res.send({
            success: true,
            favoriteBooks
        })
    } catch (err) {
        res.send({
            success: false,
            error: err
        });
    }
}

module.exports.deleteFavoriteBook = async (req, res) => {
    try {
        let bookIdKey = req.params.id;
        console.log("bookIdKey", bookIdKey)
        let key = `/books/${bookIdKey}`;
        console.log("key", key);
        let favoriteBook = await favoriteModel.findOne({ key: key });        
        if (favoriteBook) {
            res.send({
                success: false,
                msg: "Book is not available in favorite"
            })
        } else {            
            let result = await favoriteModel.findOneAndDelete({ key: key });
            res.send({
                success: true,
                msg: "Book deleted from favorite"                
            })
        }
    }
    catch (err) {
        res.send({
            success: false,
            error: err
        });
    }
}