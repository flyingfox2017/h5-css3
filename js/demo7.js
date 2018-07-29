function draw(id){
    var canvas = document.getElementById(id);
    if(canvas == null) return false;
    var context = canvas.getContext('2d');
    context.beginPath();
    //context.moveTo(150,20);
    //context.arcTo(150,100,50,20,30);
    context.moveTo(150,20);
    context.lineTo(150,100);
    context.lineTo(50,20);
    context.stroke();
}