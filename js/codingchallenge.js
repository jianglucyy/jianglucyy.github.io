var md = true;
var colorBlue = "#4169E1";
var colorGreen = "#008000";
var colorRed = "#FF0000";
var colorYellow = "#FFFF00";
var colorPen = "#FF0000";


var canvas = document.getElementById('a');
canvas.addEventListener('mousemove', 
	function(evt){
		var mousePos = getMousePos(canvas, evt);
		var posx = mousePos.x;
		var posy = mousePos.y;
		draw(canvas, posx, posy);
	});

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
  colorPicker = document.querySelector("#colorPicker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateColor, false);
  colorPicker.select();
}
function updateColor(event) {
    colorPicker.value = event.target.value;
    colorPen = colorPicker.value;
}


/*drawing*/
function getMousePos(canvas, evt){
	var rect = canvas.getBoundingClientRect();
	return{
		x: evt.clientX - 19,
		y: evt.clientY - 16
	};
}
function draw(canvas, posx, posy){
	var ctx = canvas.getContext('2d');
	if(md){
		ctx.fillStyle = colorPen;
		ctx.fillRect(posx, posy, 30, 30);
	}
}




