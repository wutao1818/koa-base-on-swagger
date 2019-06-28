import { SwaggerRouter } from '../../../dist/index';

const koaRouterOpts = { prefix: '/health' };
const swaggerRouterOpts = {
  title: 'API version 1.0.0',
  description: 'SWAGGER - API - DOC',
  version: '1.0.0'
};
const router = new SwaggerRouter(koaRouterOpts, swaggerRouterOpts);

// swagger docs avaliable at http://localhost:3000/api/v2/swagger-html
router.swagger();

router.mapDir(__dirname);

export default router;
