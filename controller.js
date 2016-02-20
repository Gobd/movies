angular.module('app').controller('mainController', function($scope, svc){

  $scope.getSearch = function(params, pages){
    svc.search(params, pages)
    .then(function(response){
      console.log(response);
      $scope.searchData = response[0];
      $scope.page = response[1];
    });
  };

  $scope.things = [
    {display: 'All',
    val: function(){return {s: $scope.title};}},
  {display: 'Movie',
  val: function(){return {type: 'movie', s: $scope.title};}},
    {display: 'Series',
    val: function(){return {type: 'series', s: $scope.title};}},
  {display: 'Epsiode',
  val: function(){return {type: 'episode', s: $scope.title};}},
];

$scope.pagesBool = true;
$scope.selected = $scope.things[0];
});
