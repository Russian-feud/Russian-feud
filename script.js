$(function() {
 // setTimeout(function() {
//   $("body").addClass("loaded");
  //}, 100);

  setTimeout(function() {
   $("body").addClass("initial");
  $("svg").removeClass("resize");
   $(".loader-container").css("display", "none");
  }, 100); 
  
 // var loader = new Vivus("loaderSvg", {
   //   type: "oneByOne",
     // start: "autostart",
    //}, function() {
      //$(".bat-body").css({ fill: "#ffffff" });
      //$(".bat-eye").css({ fill: "#2c3e50" });
   // }
  //)

  // ------------------------------------------------------

  var areas = [
    ".continent-one",
    ".continent-two",
    ".continent-three",
    ".continent-four",
	".continent-five",
    ".continent-six",
    ".continent-seven",
    ".continent-eight",
	 ".continent-nine",
	  ".continent-ten"

  ];

  var colors = [
    "#00B454", //     ".continent-one",//
    "#3C9DD0",//     ".continent-two",//
    "#ffdb58",// ".continent-three" //
    "#62DA9A",//  ".continent-four",// 
	"#8a7f8e",// ".continent-five",// 
	"#FFBF73",// ".continent-six",// 
	"#ff4d00",//  ".continent-seven",//
	"#ad655f",// ".continent-eight",// 
	"#228751",// ".continent-nine",//
	"#eee8aa"// ".continent-ten"//
  ];


  function fillMap(area, color, time) {
    setTimeout(function() {
      $(area).css("fill", color);
    }, time);
  }
  setTimeout(function() {
    var map = new Vivus("mapSvg", {
        duration: 300
      }, function() {
        for (var i = 0; i < areas.length; i++) {
          fillMap(areas[i], colors[i], (i + 1) * 250);
        }

        LoadSnap();
      }
    );
  }, 2800);
});
//----------------------------------------------------

function LoadSnap() {
  var map = $("#mapSvg");
  var mapContinents = map.find("path");

  mapContinents.on("mouseenter", function() {
    var hoveredElem = $(this);
    var tooltipClass = hoveredElem.data("tooltip");

    mapContinents.css({
      opacity: "0.5",
      transition: "opacity 0.3s"
    });

    hoveredElem.css({
      opacity: "1",
      transition: "opacity 0.5s"
    });

    // get center of elem
    var offsetLeft = hoveredElem.offset().left;
    var offsetTop = hoveredElem.offset().top;
    var boxWidth = this.getBoundingClientRect().width;
    var boxHeight = this.getBoundingClientRect().height;

    // tooltip show
    $("." + tooltipClass).css({
      top: offsetTop + boxHeight,
      left: offsetLeft + boxWidth / 2,
      opacity: "1",
      visibility: "visible"
    });
  });

  mapContinents.on("mouseleave", function() {
    var hoveredElem = $(this);
    var tooltipClass = hoveredElem.data("tooltip");

    $("." + tooltipClass).css({
      opacity: "0",
      visibility: "hidden"
    });

    mapContinents.css({
      opacity: "1",
      transition: "opacity 0.4s"
    });
  });
}
