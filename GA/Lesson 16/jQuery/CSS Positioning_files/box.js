
r = prompt('Are you ready to make changes to THE DOM? (Y)es or (N)o');

if (r =='Y') {
	$('.box2').show()
	.css('background-color','blue')
	.css('height',0)
	.css('width',0)
	.animate({'height':'200px','width':'200px'},500);

	$('.box').hide()
	.css('height',0)
	.css('width',0)
	.animate({'height':'0px','width':'0px'},500);

}

if (r=='N') {
		$('.box').show();
}

/*
	Only add code to this file.


*/


