const conn = require('./db/conn')
const {Ciclista, Agendamento, Bicicleta} = require('./models/rel')

async function syncDataBase(){
    try {
        await conn.sync({force: true})
        console.log('Tabelas Sincronizadas')
    } catch(error){
        console.error('Erro ao sincronizar as tabelas:', error)
    }finally{
        conn.close()
        console.log('Fechando a conexão com o DB')
    }
}

syncDataBase()