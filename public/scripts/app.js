angular.module('libraryApp', [])
       .controller('BooksIndexController', BooksIndexController);

console.log('BooksIndexController connected!');

BooksIndexController.$inject = ['$http'];

function BooksIndexController($http) {
  var vm = this;

  $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books'
    }).then(function successCallback(response) {
      console.log('getting all books in BooksIndexController', response.data);
      vm.books = response.data.books;
    }, function errorCallback(response) {
      console.log('There was an error getting the data BooksIndexController', error);
    });
}
