/**
 * Created by Happy Life on 2017/2/11.
 */
angular.module("movieApp.laterCtr",[])
    .controller("laterCtr",["$scope",'$movieServ','$routeParams','$http',function ($scope,$movieServ,$routeParams) {
        $scope.movie={};
        $scope.isLoading=false;
        $scope.mask=true;
        $routeParams.pageid=$routeParams.pageid||1;
        $scope.pageid=$routeParams.pageid;
        // console.log($routeParams.pageid);
        var start=($scope.pageid-1)*5
        $movieServ.jsonp('https://api.douban.com/v2/movie/coming_soon',{
            count:5,
            start:start
        },function (data) {
            $scope.movie=data;
            console.log(data);
            // 薄露上一页
            $scope.prev=$routeParams.pageid-1;
            if($routeParams.pageid<=1){
                $scope.prev=1;
            };
            // 暴露下一页
            $scope.next=($routeParams.pageid-0)+1;
            // 获取最大页数
            $scope.pageMax=Math.ceil(data.total/5);
            if($scope.next==$scope.pageMax){
                $scope.next=$scope.pageMax;
            };
            // 暴露一个总条数
            $scope.total=data.total;
            $scope.isLoading=true;
            $scope.mask=false;
            $scope.$apply();
        })

    }])