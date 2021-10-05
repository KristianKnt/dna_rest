const { response, request } = require('express');
const compareDNA = require('./dna_compare');



const dnaGet = (req = request, res = response) => {

    const { body } = req;
    const resq = body.body
    
    let menssage = compareDNA(body.body);

    res.json({
        menssage,
        resq
    })
}

const dnaPost = (req, res = response) => {

    const { id } = req.body;

    res.json({
        menssage: 'post API -  controlador',
        id
    })
}

const dnaPut = (req, res = response) => {

    const id  = req.params.id;
    res.json({
        menssage: 'put API -  controlador',
        id
    })
}

const dnaPatch = (req, res = response) => {

    res.json({
        menssage: 'patch API -  controlador'
    })
}

const dnaDelete = (req, res = response) => {

    res.json({
        menssage: 'delete API -  controlador'
    })
}


module.exports = {
    dnaGet,
    dnaPost,
    dnaPut,
    dnaPatch,
    dnaDelete
}