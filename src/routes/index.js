const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>
{
	//();
	//console.log(__dirname + '/views/index.html');
	////archivo esta en esta dirreccion
	//res.sendFile(path.join(__dirname,'views/index.html'));
	 res.render('index.html',{title: 'Pagina Web'});
});




router.get('/contact',(req,res)=>{

	 res.render('contact.html',{title: 'Contact Page'});
});

module.exports= router;