import express from 'express';
import cors from 'cors';
import {ENV} from '../config/env.js';
import bodyParser from 'body-parser';
import userRoutes from '../routes/userRoutes.js';

const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL, credentials:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to Listas UPDS API.',
      endpoints:{
        users: '/api/users'
      }
    });
});
app.use('/api/users', userRoutes);


app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});

