const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    atack: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    velocity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },

  });
};
