'use strict';
angular.module('confusionApp')
	.directive('materialboxed', function() {
return {
    // Restrict it to be an attribute in this case
    restrict: 'A',
    // responsible for registering DOM listeners as well as updating the DOM
    link: function() {
        $('.materialboxed').materialbox();
    }
   };
 })
	.directive('materialtabs', function() {
return {
	restrict: 'A',
	link: function() {
	$('ul.tabs').tabs();
	 }
	};	
  })
  ;