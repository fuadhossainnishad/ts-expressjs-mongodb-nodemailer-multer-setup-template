import express from 'express';
import cors from 'cors';
import router from './router';
import helmet from 'helmet';
import config from './app/config';
import cookieParser from 'cookie-parser';
import notFound from './middleware/notFound';
import globalErrorHandler from './middleware/globalErrorHandler';

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? config.domain! : '*',
  }),
);

app.use('/src/uploads', express.static('src/uploads'));

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Well Come To Setup Template',
  });
});

app.use('/api/v1', router);

app.use(notFound);

app.use(globalErrorHandler);

export default app;
