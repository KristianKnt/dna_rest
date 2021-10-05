
const { Router } = require('express');
const {
    dnaGet,
    dnaPut,
    dnaPost,
    dnaDelete,
    dnaPatch
} = require('../controllers/dna_structure');

const router = new Router();


router.get('/', dnaGet)

router.put('/:id', dnaPut)

router.post('/', dnaPost)

router.delete('/', dnaDelete)

router.patch('/', dnaPatch)

module.exports = router;


