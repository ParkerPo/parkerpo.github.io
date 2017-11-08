$(function() {
  // name1 = prompt("第一個人的名字")
  // name2 = prompt("第二個人的名字")
  name1 = "Parker"
  name2 = "Samantha"
  $("#name1").text(name1);
  $("#name2").text(name2);


});

$(".btn").click(function(){
	name = $(this).text()
	ans = prompt(name+"說:")
	
	newone = true
	$("td").each(function(){
			if ($(this).text() == ans){
				alert("出現過了!!")
				newone = false;
			}
		})
	if (newone && ans != null){

		$("tbody").append( $("<tr>").append($("<th>").append(name)).append($("<td>").append(ans)))
		$("#"+this.id+"score").text(parseInt($("#"+this.id+"score").text())+1)
	}
})