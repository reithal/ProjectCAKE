let Sequelize = require("sequelize");
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

// Creating our Employers model
module.exports = function(sequelize, DataTypes) {
  let Employers = sequelize.define("Employer", {
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
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Employers.associate = function(models) {
    Employers.hasMany(models.Gig, { onDelete: "cascade" });
  };

  // Creating a custom method for our Employee model. This will check if an unhashed password entered by the Employee can be compared to the hashed password stored in our database
  Applicants.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the Employee Model lifecycle
  // In this case, before an Employee is created, we will automatically hash their password
  Employee.addHook("beforeCreate", function(Employee) {
    Employee.password = bcrypt.hashSync(Employee.password,bcrypt.genSaltSync(10),null);
    return Employers;
  });
 };
