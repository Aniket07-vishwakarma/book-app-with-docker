const express = require('express')
const mongoose = require('mongoose')
//const bodyParser = require('body-parser');
const cors = require('cors');
const favoriteBooksRoutes = require('./src/routes/favorite.routes');
const UserRouter = require('./src/routes/user.routes')
const CommentRouter = require('./src/routes/comment.routes')
const AuthRouter = require('./src/routes/auth.routes')
const app = express();
const port = 5001;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/favoriteBooks", favoriteBooksRoutes);
app.use('/user', UserRouter)
app.use('/comment',CommentRouter)
app.use('/auth',AuthRouter)

// mongoose.connect ('mongodb://127.0.0.1:27017/UserDB')
mongoose.connect ('mongodb://mongodb:27017/UserDB')
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Db connected Successfully")

})
app.listen(port , () =>{
    console.log("Server is Running")
})