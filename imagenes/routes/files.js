// creando instancia de express
const express = require('express');
const router = express.Router();
const multer = require('multer');
// Para mover el archivo se utiliza el módulo
const fs = require('fs'); // file system
const uuid = require('node-uuid'); /* se utiliza para tener id de archivos unicos */
// creando una instancia de multer
const files = multer({dest: './uploads'}); /* dest : ubicación en donde se suben los archivos temporales al server */



router.get('/',(req,res,next) => {
  res.render('files');
});

// el segundo parametro router.post es el de la imagen, el primer parametro que recibe es el fieldname, que es el name que se le indica en el type de la vista, y el segundo la cantidad de archivos a subir

router.post('/',files.array('imagen',1), async (req,res,next) => {
	try{
		let nombre_final = null;
		console.log(req.files);
		if(req.files[0].mimetype == 'image/png' || req.files[0].mimetype == 'image/jpeg'){
			// tamaño
			if(req.files[0].size < 200000){
				// subir la imagen al servidor
				// mover la imagen a una carpeta public / images
				// renombrar la imagen para que tenga un código único
				// borrar el archivo temporal asociado a esta subida
				let mimetype = req.files[0].mimetype;
				let array_mimetype = mimetype.split('/');
				let extension = array_mimetype[1];
				let name_uuid = uuid(); /* para tener el código único solo instanciamos */
				nombre_final = name_uuid+'.'+extension;

				// esto es un buffer de datos
				// se usa pipe para hacer una operación con el archivo
				// lo que se hace aqui es leer el archivo, y sobreescribirlo con un nuevo nombre
				fs.createReadStream('uploads/'+req.files[0].filename).pipe(fs.createWriteStream('public/images/'+nombre_final));

				// fs unlink
				fs.unlink(`uploads/${req.files[0].filename}`, (err) => {
					err ? console.log(err) : console.log('nada'); 
				});



			}else{
		          res.render('files',{message: 'Asegurate de que la imagen sea más chica'});
			}
		}else{
			res.render('files',{message: 'Formato de imagen incorrecto'});

		}
	}catch(error){
		console.log(error);
	}

});


module.exports = router;
