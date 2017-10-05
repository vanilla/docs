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


$(function(){
    navInit();
});
