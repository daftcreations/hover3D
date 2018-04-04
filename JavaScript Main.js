$(".project").hover3d({
  selector: ".project__card",
  shine: true,
});
$(".project").hover3d({

  // selector for element
  selector      : null,

  // Perspective value for 3d space
  perspective   : 1000,

  // Mouse movement sensitivity
  sensitivity   : 20,

  // Default behavior is the element will follow the mouse, look like it facing the mouse
  invert        : false,

  // Add shining layer
  shine       : false,

  // Helper class when mouse hover in the element
  hoverInClass  : "hover-in",

  // Helper class when mouse hover Out the element
  hoverOutClass : "hover-out",

  // Helper class when the mouse is hovering the element
  hoverClass    : "hover-3d"
  
});