$(".page, .overlay").hide(); //skjul elementer

$(document).ready(function () {
	"use strict";
	$("#frontpage").show(); //vis forsiden

	// link til anden side
	$("[pageDirect]").css("cursor", "pointer"); //links får en pointer cursor
	$("[pageDirect]").click(function () {
		$(".page").hide(); //alle sider skjules
		$("#" + $(this).attr("pageDirect")).show();
		// navnet på den ID som er i attributen "pageDirect" vises
		// "pageDirect" fungerer som et link til et ID af en ".page"
	});

	// post generator
	// t: overskrift c: kategori a: adresse ti: tid
	function createListEl(t, c, a, ti, date) {
		$("#postlist .post-desc, #profile-posts .post-desc").after("<div class='row new-post-row'><div class='col-2-sm'>" + t + "</div><div class='col-3-sm'>" + c + "</div><div class='col-3-sm'>" + a + "</div><div class='col-2-sm'>" + ti + "</div><div class='col-2-sm'>" + date + "</div></div></div>");
	}

	createListEl("Tømrer", "handyman", "gadenavn 24", "12:00", "29/4");
	createListEl("Rødvin", "Mad og drikke", "vejnavn 48", "21:00", "17/5");


	


	$("[icon]").addClass("icon"); // klassen "icon" tilføjes til elementer med attr "icon"
	$("[icon]").each(function () {
		var ic = $(this).attr("icon"); // fil navn gemmes
		$(this).css("background-image", "url(icons/" + ic + ")"); // background på icon skiftes
	});
	
	//Jquery UI
	$("#profile-tabs").tabs();
	$("button").button();
	$("input[type='checkbox']").checkboxradio();
	var newTime = $("#new-time").spinner({
		min: 0,
		max: 23
	}).spinner("value", 12);
	$("#check-time").on("click", function () {
		if (newTime.spinner("option", "disabled")) {
			newTime.spinner("enable");
		} else {
			newTime.spinner("disable");
		}
	});
	
	$("#form-category").selectmenu();

	$(".label").hover( //hover over label
		function () {
			var overlay = $(this).find(".overlay"); // .overlay klasse i .label gemmes
			if ($(overlay).is(":hidden")) { // hvis overlay er skjult?
				$(overlay).slideDown("slow"); // slide down overlay
			} else {
				$(overlay).hide(); // ellers skjul
			}
		}).mouseleave(function () {
		$(this).find(".overlay").hide(); // fikser at overlay bliver nede når der skiftes side da siden også skjules.
	});

	// slå opslag op
	function submitPost() {
		var t = $('#form-title').val();
		var c = $('#form-category').val();
		var a = $('#form-adress').val();
		var ti = $('#new-time').val();
		var date = new Date(); // ny dato
		var h = date.getDate(); // få dato
		var m = date.getMonth(); // måned
		createListEl(t, c, a, ti, h + "/" + m); // der indsættes en post med createListEL()
		$('#form-title').val(""); // formular ryddes efter opslag er udført
		$('#form-category').val("");
		$('#form-adress').val("");
		$('#new-time').val("");
		$('#form-descrtiption').val("");
		
	}
	$("#submitnewpost").click(function () {
		submitPost();
	}); // submit post fyres afsted når der trykkes på knappen

});
