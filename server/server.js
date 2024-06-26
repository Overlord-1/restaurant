import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
dotenv.config();


//DB connection 
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('database connected successfully ');
}).catch((err) => {
    console.log('DB Connection Error: ', err);
});



app.post('/login', (req, res) => {
    const { username, password, loginType } = req.body;
    console.log(`Received login request for username: ${username}, password: ${password}, loginType: ${loginType}`);
    res.sendStatus(200);
});


app.listen(8080, () => {
    console.log('Server started on port 8080');
});
