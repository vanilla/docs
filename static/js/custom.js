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

function headingScrollInit($el, callback) {
    $el.find('.headingAnchor').on('click touchstart' , function (e) {
        e.preventDefault();
        smoothScrollToElement($el, callback);
    });
}

var $headings = $('.userContent').find('h1, h2, h3, h4, h5, h6');

function anchorifyPage() {
    var anchorSVG = '<svg class="icon iconLink"><title>Anchor</title><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-link"></use></svg>';
    $headings.each(function(){
        if (hasAttr($(this), 'id')) {
            var anchor = '#' + $(this).attr('id');
            $(this).append('<a href="' + window.location.origin + window.location.pathname + anchor + '" class="headingAnchor">' + anchorSVG + '</a>');
            headingScrollInit($(anchor), function(){
                window.location = anchor;
            });
        }
    });
}

function makeMenuItemFromElement($heading) {
    var anchor = '#' + $heading.attr('id');
    var title = $heading.text();

    return `
        <li class="menuItem">
            <a href="${anchor}" class="sidebar-link">
                <div class="sidebar-linkWrap">${title}</div>
            </a>
        </li>`;
}



function generateDynamicNav() {
    var $contentNavContent = $("#subNav-content");
    var $contentNavPanel = $contentNavContent.closest(".column-panel")
    var contentNavEmpty = $contentNavPanel.hasClass("noContent");

    if (contentNavEmpty) {
        var output = "";

        $headings.each(function() {
            var $heading = $(this);
            var anchor = '#' + $heading.attr('id');
            output += makeMenuItemFromElement($heading);

            headingScrollInit($heading.parent(), function(){
                window.location = anchor;
            });
        });

        $contentNavContent.html(output);

        // Add smoothscroll listeners
        $contentNavContent.find(".sidebar-link").on("click touchstart", function(e) {
            var $link = $(this);
            var anchor = $link.attr("href");
            var $endpoint = $(anchor);
            smoothScrollToElement($endpoint, function() {
                window.location = anchor;
            });
        });

        $contentNavPanel.removeClass("noContent");
    }
}

function setupLocationWatcher() {
    function changeHandler() {
        var anchor = window.location.hash;
        var $links = $("#subNav-content .sidebar-link");
        var $pageNavLink = $(`#subNav-content .sidebar-link[href="${anchor}"]`);

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
    navInit();
    generateDynamicNav();
    anchorifyPage();
    mobileNavInit();
    setupLocationWatcher();
});
