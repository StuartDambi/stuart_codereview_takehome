import express from 'express';
import cors from 'cors';

import wordRouter from './src/routes/wordRoute';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', wordRouter);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
