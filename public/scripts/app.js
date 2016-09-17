angular.module('libraryApp', ['ngRoute'])
	     .config(config);

console.log('App.js is connected!');

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
    templateUrl: '/templates/books.html', //include .html
    controllerAs: 'booksIndexCtrl',
    controller: 'BooksIndexController'
  })
    .when('/books/:id', {
      template: 'This template will show a book!',
      //templateUrl: '/templates/books/books-show.html', //include .html
      controllerAs: 'booksShowCtrl',
      controller: 'BooksShowController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}