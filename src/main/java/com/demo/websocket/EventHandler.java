package com.demo.websocket;

import java.io.IOException;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class EventHandler extends TextWebSocketHandler {
	
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message)
			throws InterruptedException, IOException {
		
		session.sendMessage(new TextMessage("Server response: " + message.getPayload() +" received and processed."));
	}
}
