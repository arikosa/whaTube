angular.module('app.controllers', [])
  
.controller('mostPopularVideosCtrl', ['$scope', '$state', '$stateParams', '$q', 'videoServicePromise','Countries','videoService',

function ($scope, $state, $stateParams, $q, videoServicePromise, Countries, videoService) {

	$scope.LoadingView = false;

  $scope.videos = videoServicePromise;

  $scope.countries = Countries;

  $scope.data = {
      country: 'US'
  };

  $scope.flagURL = "/img/flags/" + $scope.data.country.toLowerCase() + ".svg";

  $scope.changeCountry = function(newSelection){
  	
	$scope.flagURL = "/img/flags/" + $scope.data.country.toLowerCase() + ".svg";

  	videoService.getItems($scope.data.country).then(function (res){
  		$scope.videos = res.data.items;
  		$scope.LoadingView = false;
  	})
  };

  $scope.viewVideo = function(index){

  	$state.go('video',{
  		obj: $scope.videos[index]
  	});

  };

}])
   
.controller('videoCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {
	$scope.video = $stateParams.obj;
	$scope.videourl = "https://www.youtube.com/embed/" + $scope.video.id + "?rel=0&amp;showinfo=0";
}])
