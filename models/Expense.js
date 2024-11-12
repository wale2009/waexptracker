const { DataTypes } = require("sequelize");
const sequelize = require("../db");
// const User = require("./User");
const User = require("./User");
const Category = require("./Category");
// const Category = require("./Category");

const Expense = sequelize.define(
  "Expense",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    narration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Expense.belongsTo(Category);
Expense.belongsTo(User, { foreignKey: "UserId", as: "user" });

module.exports = Expense;