'use strict';        
angular.module('confusionApp')
        .controller('MenuController', ['$scope', 'menuFactory', '$http', function ($scope, menuFactory, $http) {
			$scope.showDetails = false;
			$scope.showMenu = false;
			$scope.message = "Loading....";
			$scope.tab = 1;
			$scope.filText = " ";
//			$scope.dishes = menuFactory.getDishes();
			
			
			/*scope to getDishes from menuFactory service*/
			//query() return enitre array in dishes
			
			
			
				menuFactory.getDishes().query(
				function(response) {
					$scope.dishes = response;
					$scope.showMenu = true;
				},
				function(response) {
					$scope.message = "Error: " + response.status + " " + response.statusText;
				});
				
			
			$scope.select = function (setTab) {
				$scope.tab = setTab;
				if(setTab === 2) {
					$scope.filText = "appetizer";
				} else if(setTab === 3) {
					$scope.filText = "mains";
				} else if(setTab === 4) {
					$scope.filText = "dessert";
				} else {
					$scope.filText = "";
				}
			};
			$scope.isSelected = function (checkTab) {
				return (this.tab === checkTab);
			};
			$scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])
		.controller('ContactController', ['$scope', function ($scope) {
			$scope.feedback = {mychannel: "", firstName: "", lastName: "", agree: false, email: ""};
			var channels = [{value: "tel", label: "Tel."}, {value: "Email",label: "Email"}];
			$scope.channels = channels;
			$scope.invalidChannelSelection = false;
		}])
		.controller('FeedbackController', ['$scope',function($scope) {
				$scope.sendFeedback = function() {
					console.log($scope.feedback);
					if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                    	$scope.invalidChannelSelection = true;
                    	console.log('incorrect');
                	}
                	else {
                    	$scope.invalidChannelSelection = false;
                    	$scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    	$scope.feedback.mychannel="";

                    	$scope.feedbackForm.$setPristine();
                    	console.log($scope.feedback);
                	}
            	};
		}])
		.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

            $scope.dish = {};
			$scope.showDish = false;
			$scope.message = "Loading...";
//			scope to service menuFactory, run function getDishes and get specific id
//			remember parseInt the id since it will return a string
			
			$scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id, 10)})
			.$promise.then(
							function(response) {
								$scope.dish = response;
								$scope.showDish = true;
							},
							function(response) {
								$scope.message = "Error: " + response.status + " " + response.statusText;
							}
			);
            
//			$scope.dish = menuFactory.getDish(parseInt($stateParams.id,10));
			$scope.searchby = '';
			//Comments controller 
			
			$scope.review = {
				rating:5,
				comment:'',
				author:'',
				date: new Date()
			};
            $scope.sendComment = function() {
					$scope.review.date = new Date().toISOString();
				console.log($scope.review);
					$scope.dish.comments.push($scope.review);
				
				menuFactory.getDishes.update({id:$scope.dish.id},$scope.review);	
					$scope.reviewForm.$setPristine();
					$scope.review = {rating:5,comment:'', author:'', date:''};
			};
        }])
		.controller('IndexController', ['$scope', '$stateParams','menuFactory','corporateFactory',function($scope,$stateParams, menuFactory, corporateFactory){
			
			 
    		
  
			var executiveChef = corporateFactory.getLeader(3);
			$scope.executiveChef = executiveChef;
//			$scope.showDish = false;
//			$scope.message = "Loading...";
			
//			var dish = menuFactory.getDish(0);
//			$scope.dish = dish;
			$scope.dish = menuFactory.getDishes().get({id:0})
			.$promise.then(
				function(response) {
					$scope.dish = response;
					$scope.showDish = true;
				},
				function(response) {
					$scope.message = "Error: " + response.status + " " + response.statusText;
				}
			);
			$scope.featured = menuFactory.getPromotion(0);
			$('.materialboxed').materialbox();			
			
			
				

				
			
		}])
		.controller('AboutController', ['$scope', '$stateParams','menuFactory','corporateFactory',function($scope,$stateParams, menuFactory, corporateFactory){
		
			var corporate = corporateFactory.getLeaders();
			var leader = corporateFactory.getLeader(parseInt($stateParams.id,10));
			$scope.corporate = corporate;
			$scope.leader = leader;
		}])
		.controller('HeaderController', function() {
			$(".button-collapse").sideNav({
      			menuWidth: 240, // Default is 240
				edge: 'left', // Choose the horizontal origin
				closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    		});
		})
		;
// implement the IndexController and About Controller here
