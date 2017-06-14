angular.module('UserService', [])
	.factory('UserAPIService', function($http) {
		UserAPIService = {
			callAPI: function(url, data) {
				return $http.post(url,data);
			} 
		};
		return UserAPIService;

	});

angular.module('TodoService', [])
	.factory('TodoAPIService', function($http) {
		TotalAPIService = {
			getTodos: function(url, data, token) {
				var header = "Athorization: JWT " + token;
				return $http.get(url, {params:{"username":data}}, header);
			},
			createTodos: function(url, data, token) {
				header = "Authorization: JWT" + token;
				return $http.post(url, data, header);
			},
				editTodo: function(url,data, token) {
					header = "Authorization: JWT " + token;
					return $http.put(url, data, header);
				},
				deteleTodo: function(url, token) {
					header = "Authorization: JWT" + token;
					return $http.delete(url, token);
				}
		};
		
		return TodoAPIService;
	});

















// 
 // angular.module('TodoService', [])
// 	.factory('TodoAPIService', function($http) {
// 		TodoAPIService = {
// 				getTodos: function(url, data, token) {					
// 						header = "Authorization: JWT " + token;
// 						return $http.get(url, {parans: {"username": data}}, header};
// 						}	
// 				createTodos: function(url, data, token) {
// 					header= "Athorization: JWT " + token;
// 					return $http.post(url, data, header);
// 				}
// 			};
// 			return TodoAPIService
// 		});

// 	