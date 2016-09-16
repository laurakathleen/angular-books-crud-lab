angular
	.module('books-crud-lab')
	.controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams'];
function BooksShowController ( $http, $routeParams ) {
	var vm = this;
	console.log($routeParams);
	console.log('BooksShowController connecting!');

	//$http requests go here (only need GET with bookID here)
}