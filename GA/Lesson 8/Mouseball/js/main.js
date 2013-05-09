var $container  = $('#container');
var $document   = $(document);


var $redsquare  = $('<div id="redsquare"></div>');
$container.append($redsquare);
$redsquare.css('border-radius', 10);

function moveTo ($square,x,y) {
	$square.css({'left': x + 'px','top': y + 'px'});
}


movedMouse = function (ev) {
	console.log(ev);
	moveTo($redsquare, ev.clientX, ev.clientY);
	moveTo($bluesquare, ev.clientX + 10, ev.clientY + 10);
}

$document.on('mousemove', movedMouse)