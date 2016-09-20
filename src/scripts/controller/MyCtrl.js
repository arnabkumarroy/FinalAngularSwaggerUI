/**
 * Created by ARNAB on 9/15/2016.
 */
app.controller('MyCtrl', function($scope,$http, swaggerTranslator,myservice) {
    // For display left side menu dynamically
    $scope.dataToList=[];

    $http.get('mainFile.json').then(function(response) {
        $scope.dataToList =response.data.categories;
        //console.log($scope.dataToList);

    });
    $scope.loadSwagger=function (swaggerFileName) {
        $scope.swaggerFileName=swaggerFileName;
        //console.log("Click Event done");

        myservice.setJsonValue=$scope.swaggerFileName+".json";
        $scope.url = $scope.swaggerUrl = myservice.setJsonValue;//'/angular-swagger-ui/src/Swagger_mx_login.json';

        console.log("TableCtrlTableCtrl:"+$scope.myservice);
    };


    //The rest of the swagger code goes here.
    $scope.isLoading = false;
    $scope.myservice=myservice.initialUrl;
    $scope.new=$scope.myservice;

    $scope.$watch(function () {
        return myservice;
    }, function (value) {
        $scope.new = value;
    });
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