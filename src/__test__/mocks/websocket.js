class WebSocketMock {
  constructor(url) {
    this.url = url;
    this.readyState = WebSocketMock.CONNECTING;
    this.listeners = {
      open: [],
      message: [],
      close: [],
      error: [],
    };
  }

  static CONNECTING = 0;

  static OPEN = 1;

  static CLOSING = 2;

  static CLOSED = 3;

  addEventListener(event, listener) {
    if (this.listeners[event]) {
      this.listeners[event].push(listener);
    }
  }

  removeEventListener(event, listener) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        (l) => l !== listener,
      );
    }
  }

  dispatchEvent(event) {
    if (this.listeners[event.type]) {
      this.listeners[event.type].forEach((listener) => {
        listener(event);
      });
    }
  }

  open() {
    this.readyState = WebSocketMock.OPEN;
    this.dispatchEvent({ type: 'open' });
  }

  close() {
    this.readyState = WebSocketMock.CLOSED;
    this.dispatchEvent({ type: 'close' });
  }

  send() {
    this.x = new Date();
    this.y = 12931279817239;
  }
}

global.WebSocket = WebSocketMock;
