angular.module('videos', [])

.factory('videoService', function ($http) {
    return {
        getItems: function (country) {
          console.log(country);
            $baseUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyA2HgVaBDeeoa5ggim8woC21e73yw8SLQc&regionCode=" + country;
            return $http.get($baseUrl);
        }
    };
});