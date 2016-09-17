// angular
// 	.module('libraryApp')
// 	.controller('BooksIndexController', BooksIndexController);

// console.log('BooksIndexController connected!');

// BooksIndexController.$inject = ['$http'];

// function BooksIndexController($http) {
//   var vm = this;

// $http({
//     method: 'GET',
//     url: 'https://super-crud.herokuapp.com/books'
//   }).then(function successCallback(response) {
//     vm.books = response.data.books;
//     console.log("getting books in BooksIndexController");
//   }, function errorCallback(response) {
//     console.log('There was an error getting the data BooksIndexController', response);
//   });
// };