function makeGrid(heightt,widthh){
	for(var i = 0; i < heightt; i++){
		for(var j = 0; j < widthh; j++){
			$("#container").append("<div class='grid'></div>");
		}
	}
	$(".grid").width(960/widthh);
    $(".grid").height(960/heightt);
}

function paint(){
	$("#makeIt").click(function(){
		$(".grid").remove();
		var takeHeight = $("#GridHeight").val();
		var takeWidth  =$("#GridWidth").val();
		makeGrid(takeHeight,takeWidth);

	$(".grid").on("click",function(){
		var s = $("#newColor").val();
		$(this).css("background-color",s);
	});
	
	});
}
paint();