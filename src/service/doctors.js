const httpRequest = require('request');

// doctors 服务相关接口

// 根据协议类型查询最新协议
export function agreements(agreementType) {
  return new Promise((resolve, reject) => {
    const da1 = new Date().getTime(); // /
    httpRequest(
      `/agreementType`,
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const da2 = new Date().getTime(); // /
          console.log(`nodejs转发接口耗时===> ${da2 - da1} ms`);
          resolve({
            data: JSON.parse(body).data,
            statusCode: response.statusCode
          });
        } else {
          resolve({
            statusCode: response.statusCode,
            statusMessage: response.statusMessage
          });
        }
      }
    );
  });
}

// 获取用户需要同意的协议类型
export function agreementsType(doctorId) {
  return new Promise((resolve, reject) => {
    const da1 = new Date().getTime(); // /
    httpRequest(
      `/agreements`,
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const da2 = new Date().getTime(); // /
          console.log(`nodejs转发接口耗时===> ${da2 - da1} ms`);
          resolve({
            data: JSON.parse(body).data,
            statusCode: response.statusCode
          });
        } else {
          resolve({
            statusCode: response.statusCode,
            statusMessage: response.statusMessage
          });
        }
      }
    );
  });
}
