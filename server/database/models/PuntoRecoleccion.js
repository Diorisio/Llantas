
/**
 * User model representation
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns Sequelize User model
 */
 module.exports = (sequelize, DataTypes) => {
    const PuntoRecoleccion = sequelize.define('PuntoRecoleccion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tipollanta: {
            type: DataTypes.STRING
        },
        rin: {
            type: DataTypes.INTEGER
        },
        cantidad: {
            type: DataTypes.INTEGER
        }
    
        
        
    }, {
        tableName: 'puntoRecoleccion',
        timestamps: true,
    });
    PuntoRecoleccion.associate = function (models) {

        PuntoRecoleccion.belongsTo(models.User, {
            as: "users",
            foreignKey: "id_user"
        });
    }

    return PuntoRecoleccion;
}