/**
 * Created by ARNAB on 9/15/2016.
 */
var app=angular
    .module('myApp', ['ngSanitize', 'swaggerUi']);

    app.config(function(swaggerTranslatorProvider) {
    swaggerTranslatorProvider
        .setLanguage('en')
        .addTranslations('en', {
            appTitle: 'Swagger-Dashboard-CCP',
            explore: 'Explore',
            loading: 'loading...',
            error: 'Failed to generate Swagger-UI: {{code}} {{message}}',
            spanish: 'spanish',
            english: 'english',
            japanese: 'japanese'
        })
        .addTranslations('mx', {
            appTitle: 'Swagger-Tablero-CCP',
            explore: "Explorar",
            loading: "Cargando ...",
            error: "No se ha podido generar Swagger-UI: {{code} {} {mensaje}} ",
            spanish: 'español',
            english : 'inglés',
            japanese: 'japanese'
        });
});