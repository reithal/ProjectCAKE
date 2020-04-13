let Sequelize = require("sequelize");
var bcrypt = require("bcryptjs");
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
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true,
    },
  });

  // Creating a custom method for our Employee model. This will check if an unhashed password entered by the Employee can be compared to the hashed password stored in our database
  Employers.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the Employee Model lifecycle
  // In this case, before a Employee is created, we will automatically hash their password
  Employers.addHook("beforeCreate", function(Employers) {
    Employers.password = bcrypt.hashSync(Employers.password, bcrypt.genSaltSync(10), null);
  });
  
  Employers.associate = function(models) {
    Employers.hasMany(models.Gig, { onDelete: "cascade" });
  };

  return Employers;
};
