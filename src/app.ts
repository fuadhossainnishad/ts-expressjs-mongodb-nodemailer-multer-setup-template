import express from 'express';
import cors from 'cors';
import router from './router';
import helmet from 'helmet';
import config from './app/config';
import notFound from './middleware/notFound';
import globalErrorHandelar from './middleware/globalErrorHandelar';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? config.domain! : '*',
  }),
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Well Come To Setup Templete',
  });
});

app.use('/api/v1', router);

app.use(notFound);
app.use(globalErrorHandelar);

export default app;
