$(".page, .overlay").hide(); //skjul elementer



$( document ).ready(function() {
	"use strict";
	$("#frontpage").show(); //vis forsiden

	// link til anden side
	$("[pageDirect]").css("cursor","pointer"); //links får en pointer cursor
	$("[pageDirect]").click(function() {
        $(".page").hide(); //alle sider skjules
	    $("#"+$(this).attr("pageDirect")).show(); 
		// navnet på den ID som er i attributen "pageDirect" vises
		// "pageDirect" fungerer som et link til et ID af en ".page"
	});
	
// post generator
// t: overskrift c: kategori d: beskrivelse ti: tid
 function createListEl(t,c,d,ti) {$( "#postlist" ).append("<div class='row new-post-row'><div class='col-2-sm'>"+t+"</div><div class='col-3-sm'>"+c+"</div><div class='col-3-sm'>"+d+"</div><div class='col-2-sm'>"+ti+"</div><div class='col-2-sm'>"+"xx"+"</div></div></div>");}	

createListEl("Tømrer","handyman","blablabla","12:00");
createListEl("Røvin","Mad og drikke",". . .","21:00");

	
$("[pageDirect]").css("cursor","pointer"); //links får en 

	
$("[icon]").addClass("icon"); // klassen "icon" tilføjes til elementer med attr "icon"
$("[icon]").each(function() {
	var ic = $(this).attr("icon"); // fil navn gemmes
	$(this).css("background-image", "url(icons/"+ic+")"); // background på icon skiftes
});	
	//Jquery UI
	$("#profile-tabs").tabs();
	$("button").button();
	$( "input[type='checkbox']" ).checkboxradio();
	var newTime = $( "#new-time" ).spinner({
		min:0,
		max:24
	}).spinner( "value", 12 );
    $( "#check-time" ).on( "click", function() {
      if ( newTime.spinner( "option", "disabled" ) ) {
        newTime.spinner( "enable" );
      } else {
        newTime.spinner( "disable" );
      }
    });
	

$( ".label" ).hover( //hover over label
  function() {
var overlay = $(this).find(".overlay"); // .overlay klasse i .label gemmes
	   if ( $( overlay ).is( ":hidden" ) ) { // hvis overlay er skjult?
    $( overlay ).slideDown( "slow" ); // slide down overlay
  } else { 
    $( overlay ).hide(); // ellers skjul
  }}).mouseleave(function() {
    $(this).find(".overlay").hide(); // fikser at overlay bliver nede når der skiftes side da siden også skjules.
});

});



