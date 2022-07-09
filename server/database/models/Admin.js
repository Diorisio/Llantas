const bcrypt = require('bcryptjs');
/**
 * User model representation
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns Sequelize User model
 */
 module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
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
        contrasena: {
            type: DataTypes.STRING
        },
        
    }, {
        tableName: 'admin',
        timestamps: true,
        hooks: {
            beforeCreate: async (admin) => {
                const salt = await bcrypt.genSalt(10);
                admin.contrasena = await bcrypt.hash(admin.contrasena, salt);
            }
        }
    });

    Admin.prototype.validPassword = async function (contrasena) {
        return await bcrypt.compare(contrasena, this.contrasena);
    }

    return Admin;
}