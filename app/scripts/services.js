'use strict';   
angular.module('confusionApp')
	.constant('baseURL',"http://localhost:3000/")  //good for testing locally ("json-server --watch ..) 
	.service('menuFactory', ['$resource','baseURL', function($resource,baseURL) {
		
		
		
		this.getDishes = function(){
			return $resource("dishes/:id", null, 
							 {'update': {method: 'PUT' }});
			
		}
		/*this.getDishes = function(){
			return $resource(baseURL+"dishes/:id", null, 
							 {'update': {method: 'PUT' }});
			
		}*/
		/*this.getDishes= function() {
			return dishes;
		}
		this.getDish = function(index) {
			return dishes[index];
		}*/
		
		this.getPromotion = function(index) {
			return promotions[index];
		}
		
		//MENU
		
		
		//PROMOTIONS 
		var promotions = [
			{
				_id:0,
                          name:'Weekend Grand Buffet', 
                          image: 'images/buffet.png',
                          label:'New',
                          price:'19.99',
                          description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person '
                }
		];
		
		// implement a function named getPromotion
        // that returns a selected promotion.
		
	}])
//	SERVICE - corporateFactory
	.service('corporateFactory', function() {
		this.getLeaders = function() {
			return leadership;
		};
		
		this.getLeader = function(index) {
			return leadership[index]
		};
		
		var leadership = [
                {
                    name: "Jordan J",
                    image: 'images/james.jpg',
                    designation: "Chief Epicurious Officer",
                    abbr: "CEO",
                    description: "Our CEO, Jordan, credits his hardworking filipino immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
                },
                {
                    name: "Terry tarra",
                    image: 'images/james.jpg',
                    designation: "Chief Food Officer",
                    abbr: "CFO",
                    description: "Our CFO, Terry, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
                },
                {
                    name: "Konrad Kal",
                          image: 'images/james.jpg',
                    designation: "Chief Taste Officer",
                    abbr: "CTO",
                    description: "Blessed with the most discerning gustatory sense, Konrad, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
                },
                {
                    name: "James Relu",
                    image: 'images/james.jpg',
                    designation: "Executive Chef",
                    abbr: "EC",
                    description: "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
                }
                
            ];
	})
	;
