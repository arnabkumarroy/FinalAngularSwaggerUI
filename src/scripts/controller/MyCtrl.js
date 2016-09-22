/**
 * Created by ARNAB on 9/15/2016.
 */
app.controller('MyCtrl', function($scope,$http, swaggerTranslator,myservice) {
    // For display left side menu dynamically entities
    $scope.dataToList=[];
    $scope.fileType="json";
    $http.get('mainFile.json').then(function(response) {
        $scope.dataToList =response.data.categories;
        console.log($scope.dataToList);

    });
    $scope.loadSwagger=function (swaggerFileName,swaggerFileType) {
        $scope.swaggerFileName=swaggerFileName;
        //console.log("Click Event done");
        $scope.fileType=swaggerFileType;
        console.log("swaggerFileType:"+swaggerFileType);
        myservice.setJsonValue=$scope.swaggerFileName;
        $scope.url = $scope.swaggerUrl = myservice.setJsonValue+"."+swaggerFileType;//'/angular-swagger-ui/src/Swagger_mx_login.json';

        console.log("TableCtrlTableCtrl:"+$scope.myservice);
    };


    //The rest of the swagger code goes here.
    $scope.isLoading = false;
    $scope.myservice=myservice.initialUrl;
    $scope.new=$scope.myservice;

    $scope.url = $scope.swaggerUrl = $scope.new;//'/angular-swagger-ui/src/Swagger_mx_login.json';
    // error management
    $scope.myErrorHandler = function(data, status){
        alert(swaggerTranslator.translate('error', {
            message: data,
            code: status
        }));
    };
    $scope.setMx = function() {
        swaggerTranslator.useLanguage('mx');
    };
    $scope.setEn = function() {
        swaggerTranslator.useLanguage('en');
    };
    $scope.getLang = function() {
        return swaggerTranslator.language();
    };
});