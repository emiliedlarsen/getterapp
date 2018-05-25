$(".page, .overlay").hide(); //skjul elementer

$(document).ready(function () {
	"use strict";
	$("#frontpage").show(); //vis forsiden

	// link til anden side
	$("[pageDirect]").css("cursor", "pointer"); //links får en pointer cursor
	$("[pageDirect]").addClass("pagelink"); // klassen pagelink tilføjes til alle pageDirect for dynamisk at kunne tilføje links
	$(document).on( "click",".pagelink", function () {
		$(".page").hide(); //alle sider skjules
		$("#" + $(this).attr("pageDirect")).show();
		// navnet på den ID som er i attributen "pageDirect" vises
		// "pageDirect" fungerer som et link til et ID af en ".page"
	});
	

	// post generator
	// t: overskrift c: kategori a: adresse ti: tid
	function createListEl(t, c, a, ti, date, d) {
		$("#postlist .post-desc, #profile-posts .post-desc").after("<div pageDirect='getterview' class='row new-post-row pagelink'><div class='col-2-sm list-el-title'>" + t + "</div><div class='col-3-sm list-el-category'>" + c + "</div><div class='col-3-sm list-el-adress'>" + a + "</div><div class='col-2-sm list-el-time'>" + ti + "</div><div class='col-2-sm list-el-date'>" + date + "</div><div class='list-el-description hide'>" + d + "</div></div></div>");
	}
	createListEl("Tømrer", "handyman", "gadenavn 24", "12:00", "29/4","Jeg leder efter en tømrer som kan fikse min terrasse.");
	createListEl("Rødvin", "Mad og drikke", "vejnavn 48", "21:00", "17/5","jeg skal bruge en god rødvin her iaften, max 300kr.");

	//gå til opslag
	//insætter rigtige variabler i opslag
	//variabler samme som createListEl()	
	$(document).on( "click",".new-post-row", function () {
		var t = $(this).find(".list-el-title").text();
		var c = $(this).find(".list-el-category").text();
		var a = $(this).find(".list-el-adress").text();
		var ti = $(this).find(".list-el-time").text();
		var date = $(this).find(".list-el-date").text();
		var d = $(this).find(".list-el-description").text();
		$("#post-title").text(t);
		$("#post-category p .post-insert").text(c);
		$("#post-adress p span.post-insert").text(a);
		$("#post-time p .post-insert").text(ti);
		$("#post-date p .post-insert").text(date);
		$("#post-description p .post-insert").text(d);
	});
	
	// send besked
	$(document).on( "click","#sendmessage", function () {
		var amount = $("#getterview").find(".getter-ms-cash").val();
		var message = $("#getterview").find(".getter-ms-message").val();
		var topic = $("#getterview").find(".getter-ms-topic").val();

		$("#profile-messages").after("<div class='row'><div class='col-3-sm'>" + topic + "</div><div class='col-6-sm'>" + message + "</div><div class='col-3-sm'>" + amount + "</div></div></div>");
		$('.getter-ms-cash,.getter-ms-message,.getter-ms-topic').val("");
	});

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
		var d = $('#form-description').val();
		var date = new Date(); // ny dato
		var h = date.getDate(); // få dato
		var m = date.getMonth(); // måned
		createListEl(t, c, a, ti, h + "/" + m, d); // der indsættes en post med createListEL()
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
