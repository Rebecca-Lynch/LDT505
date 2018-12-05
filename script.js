$( document ).ready(function() {
	
	// Reassign Navigation Active State //

		// Get the Navigation Container //
		var btnContainer = document.getElementById("navigation");
		
		// Get all the navigation buttons //
		var btns = btnContainer.getElementsByClassName("btn");
		
		// Add the active state to the correct button (After this I realized JavaScipt was unnecessarily compliccated and switched to jQuery)
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		  });
		} 
		
	// GET PRACTICE INFO (This will be replaced by an SQL Database in the final iteration) //
	var userInfo = new Array;
    $.get('https://rebecca-lynch.github.io/LDT505/practice_info.text', function(data){
		var userInfo = data.split(',');
		alert("HELLO");
	});

		
	
	// Show Q&A Answer //
	$("div.QA .question").click(function(){
		$(this).siblings(".answer").slideToggle();
	});
	
	// Show Selected Group of Badges //
	$("#navigation li").click(function(){
		var which_nav_button = $(this).attr('id');
		
		$("div.subject").hide();
		$('div#' + which_nav_button).show();
	});
	
	
	// Click on How to Earn Button //
	
	$(".how_earn").click(function(){
		$(".earn_explanation").hide();
		$(this).siblings(".earn_explanation").fadeIn();
	});
	
	
	$(".exit_explanation").click(function(){
		$(this).parent().fadeOut();
	});
	
});