class Point{
	constructor(x, y, connect=true){
		this.x = x;
		this.y = y;
		this.connect = connect;
	}
}

function drawPoints(points, ctx){
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(points[0].x, points[0].y);
	
	for(let i=1;i<points.length;i++){
		if(points[i-1].connect){
			ctx.lineTo(points[i].x, points[i].y);
		} else {
			ctx.moveTo(points[i].x, points[i].y);
		}
	}
	
	ctx.stroke();
	ctx.closePath();
}	