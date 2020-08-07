import express from 'express';
import config from './config';

const app = express();

app.get('/', (req, res) => {
  res.send({ api: 'hola' });
});

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!<br><a href="/">go back</a>');
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
