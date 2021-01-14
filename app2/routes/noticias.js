const express = require('express');
const router = express.Router();
const objetoNoticias = [];

router.get('/all',(req,res,next) => {
 //res.render('noticias',{noticias: objetoNoticias});
  res.send('hola');
});


router.get('/:id',(req,res,next) => {
 console.log(`El id que llega es el: ${req.params.id}`);
});

module.exports = router;
