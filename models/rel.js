const Ciclista = require('./Ciclista')
const Agendamento = require('./Agendamento')
const Bicicleta = require('./Bicicleta')

// Ciclista <-> Bicicleta
Ciclista.hasMany(Bicicleta, {
    foreignKey: 'idCiclista',
    as: 'bicicletas',
    onDelete: 'CASCADE'
})
Bicicleta.belongsTo(Ciclista, {
    foreignKey: 'idCiclista',
    as: 'ciclista'
})

// Ciclista <-> Agendamento
Ciclista.hasMany(Agendamento, {
    foreignKey: 'idCiclista',
    as: 'agendamentos',
    onDelete: 'CASCADE'
})
Agendamento.belongsTo(Ciclista, {
    foreignKey: 'idCiclista',
    as: 'ciclista'
})

// Bicicleta <-> Agendamento
Bicicleta.hasMany(Agendamento, {
    foreignKey: 'idBicicleta',
    as: 'agendamentos',
    onDelete: 'CASCADE'
})
Agendamento.belongsTo(Bicicleta, {
    foreignKey: 'idBicicleta',
    as: 'bicicleta'
})

module.exports = { Ciclista, Agendamento, Bicicleta };
