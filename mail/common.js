$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you for message, anytime soon we will call");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});