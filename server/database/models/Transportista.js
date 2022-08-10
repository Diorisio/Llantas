 module.exports = (sequelize, DataTypes) => {
    const Transportista = sequelize.define('Transportista', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tipo_de_vehiculo: {
            type: DataTypes.STRING
        },
        capacidad: {
            type: DataTypes.FLOAT
        },
        origen: {
            type: DataTypes.STRING
        },
        destino: {
            type: DataTypes.STRING
        }
        
        
    }, {
        tableName: 'transportista',
        timestamps: true,
        // I don't want createdAt
        createdAt: 'fecha de registro',

        // I want updatedAt to actually be called updateTimestamp
        updatedAt: false,
    });
    Transportista.associate = function (models) {

        Transportista.belongsTo(models.User, {
            as: "users",
            foreignKey: "id_user"
        });
    }

    return Transportista;
}