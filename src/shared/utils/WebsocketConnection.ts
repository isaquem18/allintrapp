import throttle from 'lodash.throttle';

export const createWebSocketConnection = (
  url: string,
  onMessage: (event: any) => void,
) => {
  const ws = new WebSocket(url);
  try {
    ws.onopen = () => {
      console.log('WebSocket connection opened on', url);
    };

    ws.onmessage = throttle((event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    }, 2000);

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  } catch (e) {
    console.error('WebSocket error');
  }

  return ws;
};
