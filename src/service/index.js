const httpRequest = require('request');

// 所有外部接口文件
export function getData(token) {
  return new Promise((resolve, reject) => {
    const da1 = new Date().getTime(); // /
    httpRequest(
      `/init?token=${token}`,
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const da2 = new Date().getTime(); // /
          console.log(`nodejs转发接口耗时===> ${da2 - da1} ms`);
          resolve(JSON.parse(body).diseaseCategoryList);
        }
      }
    );
  });
}
