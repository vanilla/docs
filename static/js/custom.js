function hasAttr(el, attributeName) {
    var attribute = $(el).attr(attributeName);
    return (typeof attribute !== typeof undefined && attribute !== false);
}

var escapeHTML = (function() {
    var $escaper = $('<div>');
    return function(html) {
        return $escaper.text(html).html();
    };
}());

function stripTags(html) {
    var tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

function updateSubNav() {
    var $mainNav = $('#nav');
    var $secondaryNav = $('#nav_sub');
    var $secondaryNavContent = $('#subNav-content');
    var $subNavContent = $mainNav.find('.js-showInRightPanel .menuItem-children');


    if( $subNavContent.length > 0 && $subNavContent.closest('')) {
        $secondaryNavContent.html( $subNavContent.html() );
        $secondaryNav.removeClass('noContent');
    } else {
        $secondaryNavContent.html( '' );
        $secondaryNav.addClass('noContent');
    }
}

function navInit() {
    updateSubNav();
}



function anchorifyPage() {
    var anchorSVG = '<svg class="icon iconLink"><title>Anchor</title><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-link"></use></svg>';
    $('.userContent').find('h1, h2, h3, h4, h5, h6').each(function(){

        var anchor = hasAttr($(this), 'id') ? '#' + $(this).attr('id') : '';

        $(this).append('<a href="' + window.location.origin + window.location.pathname + anchor + '" class="headingAnchor">' + anchorSVG + '</a>');
    });
}

function mobileNavInit() {
    $('#hamburger').on('click', function(){
        $('body').addClass('mobileOpenPanel');
    });

    $('#hamburger-close').on('click', function(){
        $('body').removeClass('mobileOpenPanel');
    });
}

$(function(){
    navInit();
    anchorifyPage();
    mobileNavInit();
});
