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

function replaceTableOfContentsWithSubNav() {
    var $mainNav = $('#nav');
    var $secondaryNav = $('#nav_sub');
    var $secondaryNavContent = $('#subNav-content');
    var $subNavContent = $mainNav.find('.js-showInRightPanel .menuItem-children');

    if( $subNavContent.length > 0 && $subNavContent.closest('')) {
        $secondaryNavContent.html( $subNavContent.html() );
    }
}

function smoothScrollToElement($el, callback) {
    //calculate destination place
    var dest = 0;
    if ($el.offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
    } else {
        dest = $el.offset().top;
    }
    //go to destination
    $('html,body').animate({
        scrollTop: dest
    }, 300, 'swing', function(){
        if( callback ){
            callback();
        }
    });
}

function anchorifyPage() {
    var anchorSVG = '<svg class="icon iconLink"><title>Anchor</title><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-link"></use></svg>';
    $('.userContent').find('h1, h2, h3, h4, h5, h6').each(function(){
        if (hasAttr($(this), 'id')) {
            var anchor = '#' + $(this).attr('id');
            $(this).append('<a href="' + anchor + '" class="headingAnchor">' + anchorSVG + '</a>');
        }
    });
}

function setupSmoothScroll() {
    var $hashlinks = $("a[href^='#']");

    $(document).on("click touchstart", "a[href^='#']", function(e) {
        var $link = $(this);
        if (hasAttr($link, "href")) {
            var anchor = $link.attr("href");
            var $endpoint = $(anchor);
            smoothScrollToElement($endpoint, function() {
                window.location = anchor;
            });
        }
    });
}

function setupLocationWatcher() {
    function changeHandler() {
        var anchor = window.location.hash;
        var $links = $("#TableOfContents a");
        var $pageNavLink = $('#TableOfContents a[href="' + anchor + '"]');

        $links.removeClass("isActive");
        $pageNavLink.addClass("isActive");
    }

    // Initialize navigation watcher
    changeHandler();
    $(window).on("hashchange", changeHandler);
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
    replaceTableOfContentsWithSubNav();
    setupSmoothScroll();
    anchorifyPage();
    mobileNavInit();
    setupLocationWatcher();

    if (!window.location.hash) {
        smoothScrollToElement(".headingAnchor");
    }
});
