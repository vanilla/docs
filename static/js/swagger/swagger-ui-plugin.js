jQuery(document).ready(function($) {
    var HideTopbarPlugin = function () {
        // this plugin overrides the Topbar component to return nothing
        return {
            components: {
                Topbar: function() { return null }
            }
        }
    }

    // We actually can't prevent SwaggerUI from overwriting the set URL with one in the query string.
    // https://github.com/swagger-api/swagger-ui/issues/4332
    if (window.location.search) {
        window.location.search = "";
    }

    window.ui = SwaggerUIBundle({
        url: '/js/swagger/swagger-data.json',
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl,
            HideTopbarPlugin
        ],
        layout: "StandaloneLayout",
        validatorUrl: null,
        // filter: true,
        requestInterceptor: function (request) {
            request.headers['x-transient-key'] = gdn.getMeta('TransientKey');
        },
        onComplete: function(swaggerApi, swaggerUi){
            $('$swagger-ui .try-out, #swagger-ui .information-container').each(function() {
                $(this).hide();
            })
        }
    });

});
