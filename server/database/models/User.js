const bcrypt = require('bcryptjs');
/**
 * User model representation
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns Sequelize User model
 */
 module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        numerocelular: {
            type: DataTypes.BIGINT
        },
        numerofijo: {
            type: DataTypes.BIGINT
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_boron:{
            type: DataTypes.BOOLEAN,
            unique: true
        },
        Revisado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }   
        
        
    }, {
        tableName: 'users',
        timestamps: true,
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                user.contrasena = await bcrypt.hash(user.contrasena, salt);
            }
        }
    });

    User.prototype.validPassword = async function (contrasena) {
        return await bcrypt.compare(contrasena, this.contrasena);
    }
    
    User.associate = function(models) {
        User.hasMany(models.Sensors, { 
            as: "sensors", 
            foreignKey: "id_user"
        })
    }

    return User;
}