
/**
 * User model representation
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns Sequelize User model
 */
 module.exports = (sequelize, DataTypes) => {
    const Sensors = sequelize.define('Sensors', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        latitud: {
            type: DataTypes.FLOAT
        },
        longitud: {
            type: DataTypes.FLOAT
        },
        sensorCO: {
            type: DataTypes.FLOAT
        },
        sensorCO2: {
            type: DataTypes.FLOAT
        }
        
        
    }, {
        tableName: 'sensors',
        timestamps: true,
    });
    Sensors.associate = function (models) {

        Sensors.belongsTo(models.User, {
            as: "users",
            foreignKey: "id_user"
        });
    }

    return Sensors;
}