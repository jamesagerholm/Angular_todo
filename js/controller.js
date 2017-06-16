angular.module('RouteControllers', [])
        .controller('HomeController', function($scope) {
            $scope.title = "Welcome to Angular Todo!"
        })
        .controller('TodoController', function($scope, $location, TodoAPIService, store) {
        var url = "https://morning-castle-91468.herokuapp.com/";
        
     

         $scope.login = function() {
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
            }).catch(function(err) {
                console.log(err);
            });
        }

        $scope.authToken = store.get('authToken');
        $scope.username = store.get('username');

        $scope.todos = [];

        TodoAPIService.getTodos(URL + "todo/", $scope.username, $scope.authToken).then(function(results) {
            $scope.todos = results.data; [];
            console.log($scope.todos);
        }).catch(function(err) {
            console.log(err);
        });

        $scope.submitForm = function() {
            if ($scope.todoForm.$valid) {
                $scope.todo.username = $scope.username;
                $scope.todos.push($scope.todo);
            
                TodoAPIService.createTodo(URL + "todo/", $scope.authToken).then(function(results) {
                    console.log(results)
                }).catch(function(err) {
                    console.log(err)
                });
            }
        }
    });



// 