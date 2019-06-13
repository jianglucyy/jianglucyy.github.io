/*set to pen down first*/
var md = true;

var colorBlue = "#4169E1";
var colorGreen = "#008000";
var colorRed = "#FF0000";
var colorYellow = "#FFFF00";
var colorPen = "#FF0000";
var canvas = document.getElementById('drawCanvas');

/*get Mouse position*/
canvas.addEventListener('mousemove', 
	function(evt){
		var mouseLocation = getMouseLocation(canvas, evt);
		/*x and y coordinates of the mouse*/
        var posx = mouseLocation.x;
		var posy = mouseLocation.y;
        /*actually draw*/
		draw(canvas, posx, posy);
	});


function getMouseLocation(canvas, evt){
    /*returns the size of an element and its position relative to the viewport*/
    var rect = canvas.getBoundingClientRect();
    return{
    /*mouse position to be center of the box*/
        x: evt.clientX - 19,
        y: evt.clientY - 16
    };
}

/*drawing function*/
function draw(canvas, posx, posy){
    /*provides objects, methods, and properties to draw and manipulate graphics on a canvas drawing surface*/
    var ctx = canvas.getContext('2d');
    /*if pen down, draw*/
    if(md){
        ctx.fillStyle = colorPen;
        ctx.fillRect(posx, posy, 30, 30);
    }
}

/*make the heigh and width 80% of the window size*/
canvas.height=window.innerHeight*.8;
canvas.width=window.innerWidth*.8;


/*reload when orientation change*/
window.addEventListener("orientationchange", orientation);

function orientation(){
    window.location.reload();
}

/*change color of pen and clear w space button*/
document.body.onkeydown = function(b){
    if(b.keyCode == 66){
        colorPen = colorBlue;
    }
    else if(b.keyCode == 82){
    	colorPen = colorRed;
    }
    else if(b.keyCode == 71){
    	colorPen = colorGreen;
    }
    else if(b.keyCode == 89){
    	colorPen = colorYellow;
    }
    else if(b.keyCode == 32){
        /*again, provides objects, methods, and properties to draw and manipulate graphics on a canvas drawing surface*/
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,3000,3000)
        ctx.restore();
    	/*window.location.reload(); */
    }
    else if(b.keyCode == 38){
    	md = false;
    }
    else if(b.keyCode == 40){
    	md = true;
    }
    else{
    	colorPen = colorPen;
    }
   }

/* Color Picker*/

var colorPicker;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);
function startup() {
  /*have the colorPicker show black first*/ 
  colorPicker = document.querySelector("#colorPicker");
  colorPicker.value = defaultColor;
  /*change the pen color on input from colorPicker*/
  colorPicker.addEventListener("input", updateColor, false);
}
/*take value of the new input color and change the pen color to that value*/
function updateColor(event) {
    colorPen = event.target.value;
}




