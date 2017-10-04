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
    var $subNavContent = $mainNav.find('.menuItem.isActive .menuItem-children');


    if( $subNavContent.length > 0 ) {
        $secondaryNavContent.html( $subNavContent.html() );
        $secondaryNav.addClass('hasContent');
    } else {
        $secondaryNavContent.html( '' );
        $secondaryNav.removeClass('hasContent');
    }
}

function navInit() {
    updateSubNav();

}



$(function(){
    navInit();
});


