function draw(id){
    //获取画布对象.
    var canvas = document.getElementById(id);
    if(canvas == null) return false;
    //获取画布上下文
    var context = canvas.getContext('2d');
    //设置填充图形的样式. 在该属性中填入填充的颜色.
    context.fillStyle = "yellow";
    //绘制矩形 , 指定起点坐标和宽,高.
    context.fillRect(0,0,400,300); //设置完填充图形样式,颜色属性后,再来画矩形.

    //设置填充图形的样式,颜色属性,
    context.fillStyle = "red";
    //设置图形边框样式, 颜色属性.
    context.strokeStyle = "blue";
    context.lineWidth = 1; //线宽.
    //设置完了填充的颜色以及线框的颜色,和线宽. 接下来画矩形.
    //填充矩形.
    context.fillRect(50,50,100,100);
    //绘制矩形边框.
    context.strokeRect(50,50,100,100);
}