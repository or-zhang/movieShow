/**
 * Created by Happy Life on 2017/2/14.
 */
angular.module('movieApp.directive',[])
    .directive('ngActive',[function ( ) {
          return {
                 link:function (scope,element,attribute) {
                     switch (window.location.hash.split('/')[1]){
                         case "":
                             document.querySelector('[ng-active="/"]').classList.add("active");
                             break;
                         case "late":
                             document.querySelector('ng-active="/late"]').classList.add("active");
                             break;
                         case "nowplaying":
                             document.querySelector('ng-active="/nowplaying"]').classList.add("active");
                             break;
                         case "top250":
                             document.querySelector('ng-active="/top250"]').classList.add("active");
                             break;
                       };
                     element.on('click',function () {
                         element.parent().find('li').removeClass('active');
                         element.addClass('active')
                     })
                 }

          }
    }])
