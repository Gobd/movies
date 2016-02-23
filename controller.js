angular.module('app').controller('mainController', function($scope, $location, $rootScope, svc){

  $scope.getSearch = function(params, pages){
    svc.search(params, pages)
    .then(function(response){
      $scope.searchData = response[0];
      $scope.page = response[1];
    });
  };

  $scope.pagesBool = true;

  $rootScope.$on('$locationChangeSuccess', function () {
      if (!isEmpty($location.search() && $location.search().page)) {
          $scope.getSearch($location.search(), true);
      } else if (!isEmpty($location.search())) {
         $scope.getSearch($location.search(), false);
      }
  });

  $scope.things = [
    {display: 'All',
    val: function(){return {s: $scope.title, page: 1};}},
  {display: 'Movie',
  val: function(){return {type: 'movie', s: $scope.title, page: 1};}},
    {display: 'Series',
    val: function(){return {type: 'series', s: $scope.title, page: 1};}},
  {display: 'Epsiode',
  val: function(){return {type: 'episode', s: $scope.title, page: 1};}},
];


$scope.selected = $scope.things[0];

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}

});
