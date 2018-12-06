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
	var url = window.location.href;
	var userNumber = url.substr(url.length - 1);
	
	var userInfo = new Array;
	
	
	if (userNumber == 1){
		var textFile = "https://rebecca-lynch.github.io/LDT505/practice_info.txt";
	} else if (userNumber == 2){
		var textFile = "https://rebecca-lynch.github.io/LDT505/practice_info2.txt";
	}

	alert(textFile);
	if (textFile !== "undefined"){
		
		$.get(textFile, function(data){
			var userInfo = data.split(',');
			var i = 2;
			
			$(".badge").each(function(){
				if(userInfo[i] === 'TRUE'){
					$(this).prepend("<div class='awarded'></div>")
				}
				i = i + 1;
			});
			
			$("h1").append("<span> for " + userInfo[0] + " " + userInfo[1] + "</span>");
		});
	}

		
	
	// Show Q&A Answer //
	$("div.QA").click(function(){
		if($(this).children(".answer").css('display') == 'none'){ 
			$(".answer").slideUp();
			$(this).children(".answer").slideDown();
		} else{
			$(this).children(".answer").slideUp();
		}
	});
	
	// Show Selected Group of Badges //
	$("#navigation li").click(function(){
		var which_nav_button = $(this).attr('id');
		$("div.subject").hide();
		$('div#' + which_nav_button).fadeIn(300);
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