const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Agendamento = db.define('agendamento',{
    codAgendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type:DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type:DataTypes.STRING,
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
    
    idBicicleta: {
        type:DataTypes.INTEGER,
        references: {
            model: 'bicicletas',
            key: 'codBicicleta'
        },
        allowNull: false
    },
    },{
        timestamps: false,
        tableName: 'agendamento'
    
})

module.exports = Agendamento