const express = require('express');
// instancia de router
const router = express.Router();


// get
router.get('/',(get,res,next) => {
  // req : request (llega al server)
  // res : response (responde al cliente el server)
  
  res.render('login');

});

// post
router.post('/',(req,res,next) => {
  console.log(req.body);
  if(req.body.usuario !='' && req.body.password != ''){
	res.render('login', {message: 'usuario aprobado'});
  }else{
	res.render('login', {message: 'datos incorrectos'});
  }
});


module.exports = router;


