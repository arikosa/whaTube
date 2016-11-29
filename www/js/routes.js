angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('mostPopularVideos', {
    url: '/page1',
    templateUrl: 'templates/mostPopularVideos.html',
    controller: 'mostPopularVideosCtrl',
       resolve: {
            videoServicePromise: function (videoService) {
                return videoService.getItems('US').then(function (response) {
                    return response.data.items;
                });
            }
        }
  })

  .state('video', {
    url: '/page2',
    templateUrl: 'templates/video.html',
    controller: 'videoCtrl',
    params: {
        obj: null
    }
  })

$urlRouterProvider.otherwise('/page1')

});