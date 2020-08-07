import express from 'express';
import config from './config';
import path from 'path';
import serverRender from './renderes/serverRenderer';

const app = express();

app.set('views', path.join(__dirname, './', 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const { initialMarkup } = serverRender();
  res.render('index', {
    title: 'MVST task',
    face: ':)',
    initialMarkup,
  });
});

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!<br><a href="/">go back</a>');
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
