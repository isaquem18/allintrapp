import throttle from 'lodash.throttle';

export const createWebSocketConnection = (
  url: string,
  onMessage: (event: any) => void,
) => {
  const ws = new WebSocket(url);
  try {
    ws.onopen = () => {
      // WebSocket connection opened on
    };

    ws.onmessage = throttle((event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    }, 1500);

    ws.onclose = () => {
      // WebSocket connection closed
    };

    ws.onerror = () => {
      // WebSocket error:
    };
  } catch (e) {
    // WebSocket error
  }

  return ws;
};
