# koa-swagger-decorator

原文地址：
* [https://www.npmjs.com/package/koa-swagger-decorator]

* [https://github.com/Cody2333/koa-swagger-decorator]

项目启动：

npm install

npm run start

PM2启动：
http://localhost:8166/swagger-html

pm2 delete all

pm2 start ecosystem.config.js --interpreter babel-node


## 目录结构说明

```bash
.
├── README.md
├── .babelrc                     # Babel 配置文件
├── .eslintignore                # ESlint 忽略文件列表
├── .eslintrc.js                 # ESlint 配置文件
├── .gitignore                   # Git 忽略文件列表
├── package.json                 # 描述文件
├── dist                         # swagger相关的包文件
├── lib                          # swagger相关的库文件
├── node_modules                 # npm包
├── src                          # 源代码目录结构
│   ├── main.js                  # 入口文件
│   ├── config.js                # 配置文件
│   ├── controllers              # 业务逻辑
│       └── doctors              # doc服务
│           └── index.js         # doc服务入口描述
│       └── health               # heal服务
│           └── index.js         # heal服务入口描述
│   ├── middleware               # 中间件
│       └── errorHandle.js       # 错误处理
│   ├── routes                   # 路由入口
│       └── index.js             # 路由入口文件
│       └── aaa                  # 模块a
│       └── bbb                  # 模块b
│   ├── service                  # 其他后端微服务
│       └── doctors.js           # doctors微服务
│   ├── config                   # 生产配置
│       ├── routeConfig.js       # 路由配置文件
├── test                         # test
```
