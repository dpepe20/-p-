const express=require('express');
const app =express();
const path =require('path');

//settting confiuguracion
app.set("port",3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('views engine','ejs');
//funciones a ejecutar



//router

app.use(require('./routes/index'));

///archivos staticos

app.use(express.static(path.join(__dirname,'public')));



//listeninf the server



//escuchando el servidor
app.listen(app.get('port'), ()=>
{

	console.log('hola server',app.get('port'));

});





