import app from './app';
import dotenv from 'dotenv';
import './database';
import './libs/initialSetup';

dotenv.config();

app.listen(process.env.PORT);
console.log('Server listening on port', process.env.PORT);