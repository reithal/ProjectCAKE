// Creating our Employers model
module.exports = function(sequelize, DataTypes) {
  var Employers = sequelize.define("employers", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true,
    },
  });

  return Employers;
};
