import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';

import config from './config';
import errorHandle from './middleware/errorHandle';
import router from './routes/index';

const serve = require('koa-static');

const app = new Koa();
const logger = require('koa-logger');

app
  .use(logger())
  .use(cors())
  .use(serve('.'))
  .use(bodyParser())
  .use(errorHandle())
  .use(router.routes())
  .use(router.allowedMethods());

export default app.listen(config.port, () => {
  console.log(`App is listening on ${config.port}.`);
  console.log(`Api is on: http://localhost:${config.port}/swagger-html`);
});
