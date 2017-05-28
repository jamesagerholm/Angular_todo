angular.module('UserService', [])
	.factory('UserAPIService', function($http) {
		UserAPIService = {
				callAPI: function(url, data, token) {
				var header = "Authorization: JWT " + token
				return $http.get(url, {params:{"username": data}},header);
			}
		};
		return UserAPIService;
	});