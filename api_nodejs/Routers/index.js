const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    return res.send({message: 'Tudo ok com o método GET da raiz'});
});

router.post('/',(req,res)=>{
    return res.send({message: 'Tudo OK com o método Post da raiz'});

});

module.exports = router;
