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
