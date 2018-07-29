function draw(id){
    var canvas = document.getElementById(id);
    if(canvas == null) return false;
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEEFF";
    context.fillRect(0,0,400,300);

    var n = 0 ;
    for(var i = 0; i < 10 ; i++){
        //开始创建路径.
        context.beginPath();
        //画圆.
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        //关闭路径.
        context.closePath();
        //设置颜色样式, 填充 或者 画 边框.
        context.fillStyle = 'rgba(255,0,0,0.25)';
        context.fill();

    }

}