angular
	.module('libraryApp')
	.controller('BooksShowController', BooksShowController)

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController ( $http, $routeParams, $location ) {
	var vm = this;
	console.log($routeParams);
	console.log('BooksShowController connecting!');

	//$http requests go here (only need GET with bookID here)
};