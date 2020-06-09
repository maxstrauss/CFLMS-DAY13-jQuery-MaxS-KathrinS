$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});

//remove formTag
//$("form").remove();

//5 new Div
//$("article").prepend("<div>hello</div><div>hello</div><div>hello</div><div>hello</div><div>hello</div>");
//$("form").after("<div>hello</div><div>hello</div><div>hello</div><div>hello</div><div>hello</div>");

//change value
//$("input[value=\"HELLO!\"]").change("Search for...");
//$("input").val("Search");

//add new class to div´s
//$("form").after("<div>hello</div><div>hello</div><div>hello</div><div>hello</div><div>hello</div>");
//$("div").addClass("box");

//$("a[href$='.com']").replaceWith("a[href$='.at']");
$("a[href='http://www.codefactory.com/']").attr('href', 'http://www.codefactory.wien/');