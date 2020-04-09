let Sequelize = require("sequelize");

// Creating our Employers model
module.exports = function(sequelize, DataTypes) {
  let Employers = sequelize.define("Employer", {
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

  Employers.associate = function(models) {
    Employers.hasMany(models.Gig, { onDelete: "cascade" });
  };

  return Employers;
};
