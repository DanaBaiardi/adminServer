const Client = require('../models/client')
const {validationResult} = require('express-validator')

exports.createClient = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    try {
        const client = new Client(req.body);
        client.save()
        res.json(client)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
};

exports.getClients = async (req,res)=> {
    try {
        const clients = await Client.find().sort({created: -1})
        res.json({clients})
    } catch (error) {
        res.status(500).send('hubo un error')
    }
}

exports.updateClient = async (req,res) => {
    try {
        
    } catch (error) {
        res.status(500).send('hubo un error')
    }
}
