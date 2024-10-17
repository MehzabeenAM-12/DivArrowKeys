let circle = document.querySelector(".circle");
let circ2 = document.querySelector(".circ2");  // circle 2 JS code
let move = 12; // Adjust the movement amount as needed

  window.addEventListener("load", () => {
    circle.style.position = "absolute";
    circle.style.left = "0px";
    circle.style.top = "0px";
    
    
// circle 2 JS code
    circ2.style.position = "absolute";
    circ2.style.left = "200px";
    circ2.style.top = "0px";
  });

  window.addEventListener("keyup", (e) => {
    switch (e.key) {

      case "ArrowLeft":
        circle.style.left = parseInt(circle.style.left) - move + "px";
        break;

      case "ArrowRight":
        circle.style.left = parseInt(circle.style.left) + move + "px";
        break;

      case "ArrowUp":
        circle.style.top = parseInt(circle.style.top) - move + "px";
        break;

      case "ArrowDown":
        circle.style.top = parseInt(circle.style.top) + move + "px";
        break;   
      
     //circle 2 JS code   
      case "a":
        circ2.style.left = parseInt(circ2.style.left) - move + "px";
        break;
      
      case "d":
        circ2.style.left = parseInt(circ2.style.left) + move + "px";
        break;
      
      case "w":
        circ2.style.top = parseInt(circ2.style.top) - move + "px";
        break;
      
      case "s":
        circ2.style.top = parseInt(circ2.style.top) + move + "px";
        break;

    }
  });
