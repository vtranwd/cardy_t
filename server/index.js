import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRoutes from './routes/users.js';

app.use('/users', usersRoutes);

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://vtranwd:<password>@cluster0.pmka8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => app.listen(PORT, () => 
  console.log(`Server running on port: ${PORT}`)
  )).catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);
