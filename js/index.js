/**
 * Created by Happy Life on 2017/2/12.
 */
angular.module('movieApp.indexCtr',[])
 .controller("indexCtr",['$scope','$location',function ($scope,$location) {
     $scope.searchName="";
     $scope.search=function () {
         // window.location.href="#/search"+$scope.searchName;
         // 这里不带#
          $location.url('/search/'+$scope.searchName);

     }
 }])