
function draw(id){
    var canvas = document.getElementById(id);
    if(canvas == null ) return false;
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.lineWidth = 10;
    //为直线添加 圆形 线 帽 .   square 为直线添加正方形线帽.
    context.lineCap = "round";
    context.moveTo(20,20);
    context.lineTo(20,200);
    context.stroke();
}