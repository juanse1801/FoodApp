const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg:'Se requiere un nombre'
        }
      }
    },
    resume:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:{
          msg:'Se require un resumen'
        }
      }
    },
    score:{
      type:DataTypes.DOUBLE,
    },
    healthy:{
      type:DataTypes.DOUBLE,
    },
    howTo:{
      type:DataTypes.TEXT
    },
    image:{
      type:DataTypes.STRING
    }

  });
};
