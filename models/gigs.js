var Sequelize = require("sequelize");

// Creating our Applicants model
module.exports = function (sequelize, DataTypes) {
  var Gigs = sequelize.define("gigs", {
    employer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    volunteer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    pay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    recurring_gig: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },

    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    completion_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    laboring_hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assigned_to_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  });

  return Gigs;
};
