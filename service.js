angular.module('app').service('svc', function($http){

  this.search = function(paramConf){
      return  $http({
        url: 'http://www.omdbapi.com',
        method: "GET",
        params: paramConf,
        }).then(function(response) {
          var param = response.config.params;
          var page = [];
            for (i=2; i<=Math.round(response.data.totalResults/10); i++) {
              param.page = i;
              var objClone = JSON.parse(JSON.stringify(param));
              page.push(objClone);
            }
          var returnArr = [response.data.Search, page];
          return returnArr;
      });
  };

});
