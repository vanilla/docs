$(function($){
    
    var cache = {
        set: function (key, val, exp) {
            cache.store.set(key, {
                val: val,
                exp: exp,
                time: new Date().getTime()
            });
        },
        get: function (key) {
            var info = cache.store.get(key);

            if (!info) {
                return null;
            }

            if (new Date().getTime() - info.time > info.exp) {
                return null;
            }

            return info.val;
        }
    };
    cache.store = new $.store();
    cache.store.set('docs', null);

    var docs = cache.get('docs'),
        pages = [],
        index;

    if (docs) {
        pages = docs.pages;
        index = lunr.Index.load(docs.index);
    } else {
        index = lunr(function () {
            this.field('title', 10);
            this.field('tags', 5);
            this.field('content');
            this.ref('url');
        });

        $.ajax({
            url: $('#search-manifest').attr('src')
        })
        .done(function (data) {
            $.each(data, function (i, doc) {
                // Decode the URL encoded content
                doc.content = decodeURI(doc.content);

                index.add(doc);
                pages.push(doc);
            });

            cache.set('docs', {
                pages: pages,
                index: index
            }, 24 * 60 * 60 * 1000); // Expire after a day
        });
    }

    var $results = $('.js-search-results'),
        $template = $results.find('a');

    var searchHandler = function (e) {
        var $input = $(e.currentTarget),
            matches = [],
            query = $input.val();
    
        if (query.length < 3) {
            $results.removeClass('open');
            return;
        }

        index.search(query).map(function (match) {
            $.each(pages, function (i, page) {
                if (page.url === match.ref) {
                    matches.push(page);
                }
            });
        });

        // Clear previous results before moving on
        $results.empty();

        // Grab the first 5 search results
        matches = matches.slice(0, 5);

        if (matches.length) {
            $.each(matches, function (i, match) {
                var url = match.url,
                    title = match.title,
                    categories = match.tags.join(' / '),
                    $item = $template.clone();

                $item.attr('href', url);
                $item.find('.title').text(title);
                $item.find('.tags').text(categories);

                $results.append($item);
            });

            $results.addClass('open');
        } else {
            $results.removeClass('open');
        }
    };

    $(document).on('input', '.js-search-input', searchHandler);

});
