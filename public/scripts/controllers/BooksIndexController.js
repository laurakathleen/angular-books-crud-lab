angular
	.module('books-crud-lab')
	.controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController ($http) {
  var vm = this;
  vm.newBook = {};
};

console.log('BooksIndexController connected!');