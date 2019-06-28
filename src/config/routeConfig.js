const fs = require('fs');

const files = fs.readdirSync('./routes');
const arr = [];

files.forEach((item) => {
  const fileObj = require(`../routes/${item.split('.js')[0]}`);
  arr.push(fileObj);
});

module.exports = function (app) {
  arr.forEach((item) => {
    app.use(item.routes(), item.allowedMethods());
  });
};
