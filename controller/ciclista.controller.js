const Ciclista = require('../models/Ciclista')

const cryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo' // deve ficar no arquivo .env

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.senha || !valores.cpf || !valores.endereco || !valores.celular){
        return res.status(400).json({message: 'Todos os campos são obrigatórios!'})
    }

    if(valores.cpf.length !== 11){
        return res.status(400).json({message: 'CPF INVÁLIDO!'})
    }


    try {
        const cpfCripto = cryptoJs.AES.encrypt(valores.cpf, CHAVE_SECRETA).toString()
        const senhaCripto = cryptoJs.AES.encrypt(valores.senha, CHAVE_SECRETA).toString()
        
        await Ciclista.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaCripto,
            cpf: cpfCripto,
            endereco: valores.endereco,
            celular: valores.celular,
        })

        res.status(201).json({message: 'Ciclista cadastrados com sucesso!'})
    } catch (err) {
        console.error('Erro ao cadastrar o Ciclista',err)
        res.status(500).json({message: 'Erro ao cadastrar o Ciclista'})
    }


}

module.exports = {cadastrar}