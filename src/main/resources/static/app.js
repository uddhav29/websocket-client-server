var ws;
var wsEvent;
function setConnected(connected) {
	$("#connect").prop("disabled", connected);
	$("#disconnect").prop("disabled", !connected);
}

function connect() {
	ws = new WebSocket('ws://localhost:8080/user');
	ws.onmessage = function(data) {
		clientMessage(data.data);
	}
	setConnected(true);
}

function eventConnect() {
	console.log('inside event connect');
	wsEvent = new WebSocket('ws://localhost:8080/event');
	wsEvent.onmessage = function(data) {
		console.log('executed');
		clientMessage(data.data);
	}
	setConnected(true);
}

function disconnect() {
	if (ws != null) {
		ws.close();
	}
	setConnected(false);
	console.log("Websocket is in disconnected state");
}

function sendData() {
	var data =  $("#user").val();
	wsEvent.send(data);
}

function clientMessage(message) {
	$("#clientMessage").append("<tr><td> " + message + "</td></tr>");
}

$(function() {
	$("form").on('submit', function(e) {
		e.preventDefault();
	});
	$("#connect").click(function() {
		eventConnect();
	});
	$("#disconnect").click(function() {
		disconnect();
	});
	$("#send").click(function() {
		sendData();
	});
});
