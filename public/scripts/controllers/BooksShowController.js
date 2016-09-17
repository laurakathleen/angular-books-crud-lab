angular
	.module('libraryApp')
	.controller('BooksShowController', BooksShowController)

console.log('BooksShowController connecting!');

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController ( $http, $routeParams, $location ) {
	var vm = this;
	console.log($routeParams);

	//$location.path('/');

	//$http requests go here (only need GET with bookID here)
};