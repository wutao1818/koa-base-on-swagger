import { SwaggerRouter } from '../../dist';

import ApiRouter from '../controllers/v1';
import Api2Router from '../controllers/v2';
import ApiHealthRouter from '../controllers/health';
import ApiDoctorsRouter from '../controllers/doctors';

const router = new SwaggerRouter();

// 路由挂载
router.use(ApiRouter.routes());
router.use(Api2Router.routes());
router.use(ApiHealthRouter.routes());
router.use(ApiDoctorsRouter.routes());

// swagger docs avaliable at http://localhost:3000/swagger-html
router.swagger({
  title: 'API version 1.0.0',
  description: 'SWAGGER - API - DOC',
  version: '1.0.0'
});

const path = require('path');
// router.mapDir(__dirname);
router.mapDir(`${path.resolve(__dirname, '..')}/controllers`);

export default router;
