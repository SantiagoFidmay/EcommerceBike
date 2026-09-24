const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Bicicleta = db.define('bicicleta',{
    codBicicleta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modelo: {
        type:DataTypes.ENUM('TRILHA','ESPORTE'),
        allowNull: false
    },
    tipo: {
        type:DataTypes.ENUM('MOUNTAIN','SPEED'),
        allowNull: false
    },
    
    aro: {
        type:DataTypes.STRING(100),
        allowNull: false
    },
    
    idCiclista: {
        type:DataTypes.INTEGER,
        references: {
            model: 'ciclistas',
            key: 'codCiclista'
        },
        allowNull: false
    },

    },{
        timestamps: false,
        tableName: 'bicicletas'
    
})

module.exports = Bicicleta