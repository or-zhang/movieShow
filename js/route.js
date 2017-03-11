/**
 * Created by Happy Life on 2017/2/11.
 */
angular.module("movieApp.route",["ngRoute"])
   .config(["$routeProvider",function ($routeProvider) {
       $routeProvider.when('/',{
           templateUrl:'tmps/index-tmp.html'
        }).when('/nowplaying/:pageid?',{
           templateUrl:'tmps/nowplaying-tmp.html',
           controller:'nowplayingCtr'
       }).when('/later/:pageid?',{
           templateUrl:'tmps/later-tmp.html',
           controller:'laterCtr'
       }).when('/top250/:pageid?',{
           templateUrl:'tmps/top250-tmp.html',
           controller:'top250Ctr'
       }).when('/details/:id?',{
           templateUrl:'tmps/details-tmp.html',
           controller:'detailsCtr'
       }).when('/search/:searchName?/:pageid?',{
           templateUrl:'tmps/search-tmp.html',
           controller:'searchCtr'
       }).otherwise({
           redirectTo: '/'
       });

   }]);