import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// import post route

import postRoutes from "./routes/posts.js";



//initilize express
const app = express();

//use middleware
//this set localhost:5000 to localhost:5000/post
app.use('/posts', postRoutes);


//for file size
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//use cors
app.use(cors());

//add mongoDB atlas
const CONNECTION_URL = 'mongodb+srv://socialMedia:socialMedia123@cluster0.cnnr8.mongodb.net/?retryWrites=true&w=majority'

//port initilize
const PORT = process.env.PORT || 5000;

//setup mongose
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);