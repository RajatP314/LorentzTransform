let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static('res'));

app.all('/', (req, res)=>{
	res.sendFile(__dirname + "/lorentz.html");
});
app.all('/draw', (req, res)=>{
	res.sendFile(__dirname + "/draw.html");
});

io.on('connection', (socket)=>{
	console.log('User connected');
	socket.on('disconnect', (socket)=>{
		console.log('User disconnected');
	});
	socket.on('draw_update', (update)=>{
		io.emit('draw_update', update);
	});
});

http.listen( (process.env.PORT || 8080), ()=>{
	console.log("Main page working");
});
