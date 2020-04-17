import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json({ type: 'application/json' }));
app.use(routes);

app.get('*', (_req, res) => {
  res.redirect('/api-docs');
});

app.listen(5000, () => {
  console.log('server is running on port 5000');
});
