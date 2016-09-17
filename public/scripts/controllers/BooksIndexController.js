angular
	.module('libraryApp')
	.controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController($http) {
  var vm = this;

console.log('BooksIndexController connected!');

$http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    vm.books = response.data;
    console.log("getting books in BooksIndexController");
  }, function errorCallback(response) {
    console.log('There was an error getting the data BooksIndexController', response);
  });
};