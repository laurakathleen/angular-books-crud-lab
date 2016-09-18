angular
	.module('libraryApp')
	.controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams'];

function BooksShowController ( $http, $routeParams) {
	var vm = this;
  var bookId = $routeParams.id;
  console.log(bookId);

  //use location later for update/delete

	$http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(function successCallback(response) {
      console.log('getting one book in BooksShowController', response.data);
      vm.book = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data BooksIndexController', response);
    });

  vm.editBook = function(book){
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookId,
      data: book
    }).then(function successUpdateCallback(response){
      console.log('updating one book', response.data);
    }, function errorUpdateCallback(response){
      console.log('problem while updating book', response.data, error);
    });
  }

 vm.deleteBook = function(book) {
  $http({
    method: 'DELETE',
    url: 'https://super-crud.herokuapp.com/books/'+ bookId
  }).then(function successDeleteCallback(response) {
    var index = vm.books.indexOf(book);
    vm.books.splice(index,1);
  }, function errorDeleteCallback(response) {
    console.log('There was an error deleting the data', response);
  });
  }

};

