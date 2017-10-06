jQuery(document).ready(function($) {
    var HideTopbarPlugin = function () {
        // this plugin overrides the Topbar component to return nothing
        return {
            components: {
                Topbar: function() { return null }
            }
        }
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
