// Initializes the `backendfeathers` service on path `/backendfeathers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/backendfeathers.model');
const hooks = require('./backendfeathers.hooks');
const filters = require('./backendfeathers.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'backendfeathers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/backendfeathers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('backendfeathers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
