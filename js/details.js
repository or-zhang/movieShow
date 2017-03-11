/**
 * Created by Happy Life on 2017/2/12.
 */
angular.module("movieApp.detailsCtr",[])
    .controller('detailsCtr',['$scope','$movieServ','$routeParams',function ($scope,$movieServ,$routeParams) {
        $scope.movie={};
        $movieServ.jsonp('https://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function (data) {
            $scope.movie=data;
            console.log($scope.movie);
            $scope.$apply();
        })

    }]);
