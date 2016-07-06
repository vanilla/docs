;(function ($, window, document, undefined) {

  // Load web fonts
  WebFont.load({
    google: {
      families: [
        'Source Sans Pro:300,400,600,300italic,400italic,600italic:latin'
      , 'Source Code Pro:400,600:latin'
      ]
    }
  });

  var cache = {
    set: function (key, val, exp) {
      store.set(key, {
        val  : val
      , exp  : exp
      , time : new Date().getTime()
      });
    }
  , get: function (key) {
      var info = store.get(key);

      if (!info) {
        return null;
      }

      if (new Date().getTime() - info.time > info.exp) {
        return null;
      }

      return info.val;
    }
  };

  var docs  = cache.get('docs')
    , pages = []
    , index;

  if (docs) {
    pages = docs.pages;
    index = lunr.Index.load(docs.index);
  }
  else {
    index = lunr(function () {
      this.field('title', 10);
      this.field('categories', 5);
      this.field('content');
      this.ref('url');
    });

    $.ajax({
      url: $('#search-manifest').attr('src')
    })
    .done(function (data) {
      $.each(data.docs, function (i, doc) {
        // Decode the URL encoded content
        doc.content = decodeURI(doc.content);

        index.add(doc);
        pages.push(doc);
      });

      cache.set('docs', {
        pages: pages
      , index: index
      }, 24 * 60 * 60 * 1000); // Expire after a day
    });
  }

  var $search   = $('.js-search')
    , $results  = $('.js-search-results')
    , $template = $results.find('li');

  var searchHandler = function (e) {
    var $input  = $(e.currentTarget)
      , matches = []
      , query   = $input.val();

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
        var url        = match.url
          , title      = match.title
          , categories = match.categories.join(' / ')
          , $item      = $template.clone();

        $item.find('a').attr('href', url);
        $item.find('.title').text(title);
        $item.find('.categories').text(categories);

        $results.append($item);
      });

      $search.addClass('open');
    }
    else {
      $search.removeClass('open');
    }
  };

  $(document).on('input', '.js-search-input', searchHandler);

  var $docsNav  = $('.js-docs-nav')
    , $footer   = $('.js-footer')
    , $panelCol = $docsNav.parent();

  $panelCol.css('min-height', $docsNav.outerHeight(true));

  /*if ($(window).outerHeight() < $footer.position().top) {
    $docsNav.affix({
      offset: {
        top: function () {
          return (this.top = $docsNav.offset().top - 30);
        }
      , bottom: function () {
          return (this.bottom = $footer.outerHeight(true));
        }
      }
    });
  }*/

})(jQuery, window, document);
