import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
require('dotenv').config();

const app: Application = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    // optionSuccessStatus: 200,
  })
);
app.use(bodyParser.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ message: 'Success' });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});