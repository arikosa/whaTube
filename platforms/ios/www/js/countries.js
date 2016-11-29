angular.module('countries', [])

.service('Countries', [function(){
    
    return countries = [
        {
          key: 'US',
          name: 'United States'
        },
        {
          key: 'AR',
          name: 'Argentina'
        },
        {
          key: 'CL',
          name: 'Chile'
        }
      ];

}]);