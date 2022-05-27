canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

color="black";
width_of_line=1;

canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){

    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e){

    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("Last position of x and y coordinates is ");
        console.log("x=" + last_position_of_x + "y=" + last_position_of_y);

        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("Cureent position of x and y coordinates is ");
        console.log("x=" + current_position_of_x + "y=" + current_position_of_y);

        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();

    }

    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;

}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
