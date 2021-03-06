angular.module('app').service('svc', function($http, $location){

  this.search = function(paramConf, pages){
      if (pages) {
        var url = '?';
        for (var key in paramConf) {
          url += key + "=" + paramConf[key] + '&';
        }
        $location.url(url.slice(0,url.length-1));
        return  $http({
          url: 'http://www.omdbapi.com',
          method: "GET",
          params: paramConf,
          }).then(function(response) {
            var param = response.config.params;
            var page = [];
              for (i=1; i<=Math.round(response.data.totalResults/10); i++) {
                param.page = i;
                var objClone = JSON.parse(JSON.stringify(param));
                page.push(objClone);
              }
            var returnArr = [response.data.Search, page];
            return returnArr;
        });
      } else {
        var url = '?';
        for (var key in paramConf) {
          url += key + "=" + paramConf[key] + '&';
        }
        $location.url(url.slice(0,url.length-1));
        return $http({
          url: 'http://www.omdbapi.com',
          method: "GET",
          params: paramConf,
          }).then(function(response) {
            var param = response.config.params;
            var noPage = [];
            for (var i=1; i<=Math.round(response.data.totalResults/10); i++) {
              param.page = i;
              var objClone = JSON.parse(JSON.stringify(param));
              $http({
                url: 'http://www.omdbapi.com',
                method: "GET",
                params: objClone,
                }).then(function(response) {
                  response.data.Search.forEach(function(a){
                    noPage.push(a);
                    return noPage;
                });
              });
            }
            var returnArr = [noPage];
              return returnArr;
        });
      }
  };


});
