var Sequelize = require("sequelize");

// Creating our Applicants model
module.exports = function(sequelize, DataTypes) {
  var Applicants = sequelize.define("Applicant", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    qualifiers: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Applicants;
};
