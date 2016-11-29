
document.createElement("header");
document.createElement("footer");
document.createElement("section");
document.createElement("nav");
document.createElement("header");
document.createElement("header");
document.createElement("header");
document.createElement("header");
document.createElement("header");
console.log("hop");

$( document ).ready(function() {
    console.log( "ready!" );
    $("article").click(function(){
    	//$(this).remove();
    		$(this).animate({
    			left: "50px",
				  opacity: 1
				}, {
				  duration: 500,
				  queue: false
    		});
    		$(this).animate({
    			0:360
    			},{
				  duration: 500,
				  step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $(this).css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    		});

    });

var i=0;/*
for(i=0; i<5; i++)
{
	$("section").append("<div>coucou</div>");

}
*/

});