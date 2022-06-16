
module.exports = function(sequelize, DataTypes) {
    
    const Player = sequelize.define('Player', {
        // Model attributes are defined here
            id:{
                autoIncrement: true,
                primaryKey:true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            nombre:{
                type: DataTypes.STRING
            },
            apellido:{
                type: DataTypes.STRING
            },
            fecha_nacimiento:{
                type: DataTypes.DATE
            },
            nacionalidad:{
                type: DataTypes.STRING
            },
            club:{
                type: DataTypes.STRING
            },
            posicion:{
                type: DataTypes.STRING
            },
            trayectoria:{
                type: DataTypes.STRING
            },
            fisico:{
                type: DataTypes.STRING
            },
            fisico:{
                type: DataTypes.STRING
            },
            valor_mercado:{
                type: DataTypes.STRING
            },
            user_id:{
                type: DataTypes.INTEGER.UNSIGNED
            },
            descripcion:{
                type: DataTypes.STRING
            },
            imagen:{
                type: DataTypes.STRING
            },
      }, {
        tableName: 'players', //di la tabla no se llama en plural como el modelo, por ejemplo nuestra tabla de jugadores osea PLAYER en modelo se tiene que llamar PLAYERS LA TABLA
        timestamps: false, //me lo devuelve solo, en la base la tabla no tiene timestamps, serian si no tiene campos createdAT y updatedAT
        underscored: true, 
      });
      
      Player.associate = function(models) {
          models.Player.belongsTo(models.User, { foreignKey: 'user_id' });
      }
  
    return Player;
  
  };
  
  