var Sequelize = require("sequelize");

// Creating our Applicants model
module.exports = function(sequelize, DataTypes) {
  var Gigs = sequelize.define("Gig", {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    volunteer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    recurring_gig: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true
    },
    pay: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    laboring_hours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    completion_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    assigned_to_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Gigs.associate = function(models) {
    Gigs.belongsTo(models.Employer, { foreignKey: { allowNull: false } });
  };

  return Gigs;
};
