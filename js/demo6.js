function draw(id){
    var canvas = document.getElementById(id);
    if(canvas == null) return false;
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.beginPath();
    context.lineWidth = 1;
    context.setLineDash([5,10,15,10]);
    context.moveTo(80,80);
    context.lineTo(300,80);
    context.stroke();
}