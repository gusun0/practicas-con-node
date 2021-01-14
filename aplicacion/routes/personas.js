// creamos la instancia express
const express = require('express');
// creamos instancia router
const router = express.Router(); 


router.get('/:id/:nombre',(req,res,next) => {

  // siempre debe de haber una respuesta del servidor al cliente
  res.render('persona',{persona_id: req.params.id,persona_nombre:req.params.nombre });
});



router.get('/',(req,res,next) => {
  /*  req :  request => todo lo que llega al servidor */
  // envian informacion a través del formulario (req.body)
  // enviar información a través de URL (req.params)
  // envian información a través de la url (req.query)
  // sesiones 
	

  /* res : respuestas */
  res.render('personas');


});

module.exports = router;
