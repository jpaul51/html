
$( document ).ready(function() {
    console.log( "ready!" );



$("td").click(function(){
	var colspan=1;
	 colspan = $(this).attr("colspan");
	 if (colspan="undefined")
	 	colspan=1;
	console.log(colspan);
	$(this).attr("colspan",colspan+1);
});
});