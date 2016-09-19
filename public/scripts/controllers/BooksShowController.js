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

  vm.editBook = function(bookEdit){
    var bookEditId = $routeParams.id;
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookEditId,
      data: {
        title : bookEdit.title,
        author : bookEdit.author,
        image : bookEdit.image,
        releaseDate : bookEdit.releaseDate
      }
      }).then(function successUpdateCallback(data){
      console.log('updating one book', response.data);
      console.log(bookEdit._id);
      vm.book = response.data;
      $location.path('/');
      }, function errorUpdateCallback(response){
      console.log('problem while updating book', response.data, error);
      });
    };

 vm.deleteBook = function(book) {
  var bookDeleteId = $routeParams.id;
  $http({
    method: 'DELETE',
    url: 'https://super-crud.herokuapp.com/books/'+ bookDeleteId
  }).then(function successDeleteCallback(response) {
    console.log(bookDeleteId);
    var index = vm.books.indexOf(bookDeleteId);
    vm.books.splice(index,1);
    $location.path('/');
  }, function errorDeleteCallback(response) {
    console.log('There was an error deleting the data', response);
  });
  }

};

