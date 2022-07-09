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
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING
        },
        numerocelular: {
            type: DataTypes.BIGINT
        },
        numerofijo: {
            type: DataTypes.BIGINT
        },
        cargo: {
            type: DataTypes.STRING
        },
        contrasena: {
            type: DataTypes.STRING
        },
        direccion: {
            type: DataTypes.STRING
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

    return User;
}