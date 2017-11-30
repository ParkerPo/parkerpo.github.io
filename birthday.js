$.fn.random = function() {
  return this.eq(Math.floor(Math.random() * this.length));
}          
$.fn.exists = function () {
    return this.length !== 0;
}

$(function(){
	$(".question").hide();
	$("#finish").hide();
	$("#start_btn").click(function(){
		$("#start_div").hide();
		$(".question").random().show()
	});
	$(".ans").click(function(){
		alert("答對了！ 按確認進入下一題~")
		$(this).parent().parent().removeClass("question");
		$(this).parent().parent().hide();
		if($(".question").exists()){
			$(".question").random().show()
		}
		else{
			$("#finish").show()
		}
	});
	$(".wrong").click(function(){
		alert("你確定嗎QQ")
	})
})



