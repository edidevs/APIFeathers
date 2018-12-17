const backendfeathers = require('./backendfeathers/backendfeathers.service.js');
const message = require('./message/message.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(backendfeathers);
  app.configure(message);
};
