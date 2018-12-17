// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const messageTable = sequelizeClient.define('message', 
  {
    name: {
      type: DataTypes.CHAR      
    },
    message: {
      type: DataTypes.TEXT      
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdat'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedat'
    },
    

    
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  messageTable.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return messageTable;
};
