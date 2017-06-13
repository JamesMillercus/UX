export let wiggle = function(myelement) {
	
	$(myelement)
	    .animate({'left':(-10)+'px'},50)
	    .animate({'left':(+20)+'px'},50)
	    .animate({'left':(-10)+'px'},100)
	    .animate({'left':(-10)+'px'},50)
	    .animate({'left':(+20)+'px'},50)
	    .animate({'left':(-10)+'px'},100);
    setTimeout( function(){
		$(myelement)
		    .animate({'left':(-10)+'px'},50)
		    .animate({'left':(+20)+'px'},50)
		    .animate({'left':(-10)+'px'},100)
		    .animate({'left':(-10)+'px'},50)
		    .animate({'left':(+20)+'px'},50)
		    .animate({'left':(-10)+'px'},100);
    }, 600);
    setTimeout( function(){
		secondWiggle();
    }, 1800);
	
	function secondWiggle(){
		$(myelement)
		    .animate({'left':(-10)+'px'},50)
		    .animate({'left':(+20)+'px'},50)
		    .animate({'left':(-10)+'px'},100)
		    .animate({'left':(-10)+'px'},50)
		    .animate({'left':(+20)+'px'},50)
		    .animate({'left':(-10)+'px'},100);

	    setTimeout( function(){
			$(myelement)
			    .animate({'left':(-10)+'px'},50)
			    .animate({'left':(+20)+'px'},50)
			    .animate({'left':(-10)+'px'},100)
			    .animate({'left':(-10)+'px'},50)
			    .animate({'left':(+20)+'px'},50)
			    .animate({'left':(-10)+'px'},100);
	    }, 600);
	}

 }

 export let slide = function(myelement){
 	$(myelement).animate({'margin-right':0},200)
 }

 export let fade = function(myelement){
 	let height = $(myelement).height();
	$(myelement).animate({ "opacity": 0, "margin-top": -height }, 500);
 }