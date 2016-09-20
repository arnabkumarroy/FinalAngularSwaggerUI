/*
 * Orange angular-swagger-ui - v0.3.2
 *
 * (C) 2015 Orange, all right reserved
 * MIT Licensed
 */
'use strict';

angular
	.module('swaggerUi')
	.config(function(swaggerTranslatorProvider) {

		swaggerTranslatorProvider
			.addTranslations('mx', {
				infoContactCreatedBy: 'creada por {{name}}',
				infoContactUrl: 'Ver más en',
				infoContactEmail: 'Póngase en contacto con el desarrollador',
				infoLicense: 'Licencia: ',
				infoBaseUrl: 'URL base',
				infoApiVersion: 'API VERSIÓN',
				infoHost: 'HOST',
				endPointToggleOperations: 'Abrir / Ocultar',
				endPointListOperations: 'Las operaciones de lista',
				endPointExpandOperations: 'Expandir las operaciones',
				operationDeprected: 'Advertencia: Desaprobado',
				operationImplementationNotes: 'notas de implementación',
				headers: 'cabeceras de respuesta',
				headerName: 'Cabecera',
				headerDescription: 'Descripción',
				headerType: 'Tipo',
				parameters: 'Parámetros',
				parameterName: 'Parámetros',
				parameterValue: 'Valor',
				parameterDescription: 'Descripción',
				parameterType: 'Tipo de parámetro',
				parameterDataType: 'Tipo de datos',
				parameterOr: ' ou ',
				parameterRequired: '(requerido)',
				parameterModel: 'Modelo',
				parameterSchema: 'esquema Modelo',
				parameterContentType: 'Parámetro Tipo de contenido',
				parameterDefault: '{{default}} ((por defecto))',
				parameterSetValue: 'Haga clic para establecer el valor como parámetro',
				responseClass: 'clase de respuesta (estado {{status}})',
				responseModel: 'Modelo',
				responseSchema: 'esquema Modelo',
				responseContentType: 'Respuesta tipo de contenido',
				responses: 'Los mensajes de respuesta',
				responseCode: 'código de estado HTTP',
				responseReason: 'Razón',
				responseHide: 'Ocultar respuesta',
				modelOptional: 'opcional',
				modelOr: ' ou ',
				explorerUrl: 'URL de solicitud',
				explorerBody: 'cuerpo de la respuesta',
				explorerCode: 'Código de respuesta',
				explorerHeaders: 'cabeceras de respuesta',
				explorerLoading: 'Cargando  ...',
				explorerTryIt: 'Pruébalo !',
				errorNoParserFound: 'No hay resultados para la especificación de la fanfarronería del tipo {{type}} et version {{version}}',
				errorParseFailed: 'No se pudieron analizar las especificaciones Swagger:: {{message}}',
				errorJsonParse: 'No se ha podido analizar JSON',
				errorNoYamlParser: 'No se encontró analizador YAML, por favor asegúrese de incluir la biblioteca js-yaml'
			});

	});