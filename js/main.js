var printNav = function printNav() {
    $('body').html('<h1>Click the tabs</h1><button id="printNav">Again!</button><ul id="nav"></ul>');
    $('body').css('textAlign', 'center');
    $('#nav').html('<li></li><li></li><li></li><li></li><li></li>');
    var li = $('#nav > li');
    $.each(li, function (index, element) {
        $(element).html('<a href="#">Items</a><ul><li><a href="#"><img src="http://placehold.it/350x250"><h3>Sample Text</h3><p>Lorem ipsum dolor sit amet.</p></a></li><li><a href="#"><img src="http://placehold.it/350x250"><h3>Sample Text</h3><p>Lorem ipsum dolor sit amet.</p></a></li><li><a href="#"><img src="http://placehold.it/350x250"><h3>Sample Text</h3><p>Lorem ipsum dolor sit amet.</p></a></li><li><a href="#"><img src="http://placehold.it/350x250"><h3>Sample Text</h3><p>Lorem ipsum dolor sit amet.</p></a></li></ul>')
    });
    $('#nav').addClass('nav');
    $('#nav > li > ul').addClass('nav-dropdown')
    $('#nav > li').addClass('list-item');
    $('#nav li').click(function() {
        this.remove();
    });
    $('#printNav').css('margin-bottom', '20px');
    $('#printNav').click(function() {
        $('body').html(' ');
        printNav();
    })
};

$(document).ready(function() {
    printNav();
})
