import throttle from 'lodash.throttle';

interface createWebSocketConnectionProps {
  url: string;
  interval?: number;
}

export const createWebSocketConnection = (
  { url, interval = 1500 }: createWebSocketConnectionProps,
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
    }, interval);

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
