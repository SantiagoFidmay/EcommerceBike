const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Ciclista = db.define('ciclista',{
    codCiclista: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type:DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false
    },
    
    senha: {
        type:DataTypes.STRING(100),
        allowNull: false
    },
    
    cpf: {
        type:DataTypes.STRING(100),
        allowNull: false
    },
    
    endereco: {
        type:DataTypes.STRING(100),
        allowNull: false
    },
    
    celular: {
        type:DataTypes.STRING(50),
        allowNull: false
    },
    },{
        timestamps: false,
        tableName: 'ciclistas'
    
})

module.exports = Ciclista