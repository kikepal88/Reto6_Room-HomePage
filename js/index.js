let slider1 = document.getElementById("slider1");
let slider2 = document.getElementById("slider2");
let slider3 = document.getElementById("slider3");

let slider1Styles = window.getComputedStyle(slider1);
let slider2Styles = window.getComputedStyle(slider2);
let slider3Styles = window.getComputedStyle(slider3);

let slider1Display = slider1Styles.getPropertyValue("display");
let slider2Display = slider2Styles.getPropertyValue("display");
let slider3Display = slider3Styles.getPropertyValue("display");

function showNav1 () {
  document.getElementById("burger-nav").classList.toggle("close-icon");
  document.getElementById("header").classList.toggle("is-active");
  document.getElementById("nav-bar").classList.toggle("is-active");
};

function showSliderRight () {
  if (slider1Display === "block" && slider2Display === "none") {
    document.getElementById("slider2").classList.toggle("is-active");
    document.getElementById("slider1").classList.toggle("is-active");
    slider1Display = "none"
    slider2Display = "block"
    console.log("display1", slider1Display);
    console.log("dispaly2", slider2Display);
  } else if (slider2Display === "block" && slider3Display === "none") {
    document.getElementById("slider3").classList.toggle("is-active");
    document.getElementById("slider2").classList.toggle("is-active");
    slider2Display = "none"
    slider3Display = "block"
    console.log("display2", slider1Display);
    console.log("dispaly3", slider2Display);
  } else if (slider3Display === "block" && slider1Display === "none") {
    document.getElementById("slider1").classList.toggle("is-active");
    document.getElementById("slider3").classList.toggle("is-active");
    slider1Display = "block"
    slider3Display = "none"
    console.log("display1", slider1Display);
    console.log("dispaly3", slider2Display);
  };
};

function showSliderLeft () {
  if (slider1Display === "block" && slider3Display === "none") {
    document.getElementById("slider3").classList.toggle("is-active");
    document.getElementById("slider1").classList.toggle("is-active");
    slider1Display = "none"
    slider3Display = "block"
    console.log("display1", slider1Display);
    console.log("dispaly3", slider2Display);
  } else if (slider3Display === "block" && slider2Display === "none") {
    document.getElementById("slider2").classList.toggle("is-active");
    document.getElementById("slider3").classList.toggle("is-active");
    slider3Display = "none"
    slider2Display = "block"
    console.log("display2", slider1Display);
    console.log("dispaly3", slider2Display);
  } else if (slider2Display === "block" && slider1Display === "none") {
    document.getElementById("slider1").classList.toggle("is-active");
    document.getElementById("slider2").classList.toggle("is-active");
    slider1Display = "block"
    slider2Display = "none"
    console.log("display1", slider1Display);
    console.log("dispaly2", slider2Display);
  };
};
