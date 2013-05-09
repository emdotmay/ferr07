var $input = $('#input-field');
var $list  = $('#list-target');
var $document = $(document);
var $window = $(window);

var page 

$document.on('scroll', function(){
	if ($window.scrollTop() + $window.height() > $document.height() - $window.height())
})

$input.on('keyup', function(e){

    //13 is enter
    if (e.keyCode == 13) {
        console.log("I am searching for: %o", $input.val());
        searchFlickr($input.val(), 1, function(results){
            for(var i = 0; i < results.length; i++) {
                photo = results[i];

                imgSrc = "http://farm"+ photo.farm +".static.flickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +"_m.jpg";

                $item = $('<li></li>');
                $img  = $('<img>');

                $img.attr('src', imgSrc);
                $img.css('width', '500px');
                $item.append($img);
                $list.append($item);
            }
        });

        return false;
    }

});

function searchFlickr(query, page, cb) {
    page = 2;
    $.ajax({
        url: 'http://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&jsoncallback=?',
        data: {
            text: query,
            api_key: 'cb8af8caa407b482fc42f891f05e0951',
            per_page: 10,
            page: page,
        },
        dataType: 'jsonp'
    }).done(function(r){
        cb(r.photos.photo);
    })
}