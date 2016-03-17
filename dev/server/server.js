module.exports =  function ($) {
	//Constantes
	var PORT = 4000
	var PATH = __dirname
	var DIR_HOME = $.deploy.public.dir

	var app = $.express()
	app.use($.express.static(DIR_HOME)) //ruta path/deploy/public/index.html
	app.use('/*', function(req, res){
		res.sendFile($.path.resolve(PATH, `../../${DIR_HOME}`))
	})
	
	app.listen(PORT, function(){
		return console.log('Listening on port %d', PORT)
	})

	//Abrir navegador automaticamente
	$.open('http://localhost:' + PORT)
}



