const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
  "User",
  {
    // UUID: Preferred in distributed systems or applications requiring globally unique identifiers,
    // ensuring no ID conflicts even across different databases.
    id: {
      // DataTypes.UUID: In the second example, the id is a Universally Unique Identifier (UUID),
      // which is a 128-bit value used to uniquely identify objects.
      type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4: In the second example, the id is generated using the UUID v4 standard,
      // which creates a random and unique string, not sequential.
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      // Note: DataTypes.INTEGER: In the first example, the id is an integer that automatically increments with each new record.
      // autoIncrement: true: In the first example, the id field will auto-increment (e.g., 1, 2, 3, etc.),
      // meaning the database automatically assigns the next integer.
      //id: {
      //     type: DataTypes.INTEGER,
      //     autoIncrement: true,
      //     primaryKey: true,
      //   },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.associate = (models) => {
  User.hasMany(models.Expense, { foreignKey: "UserId", as: "expenses" });
};

module.exports = User;
