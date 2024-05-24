interface ApiRequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: any; // Dados para GET
  data?: any; // Dados para POST e PUT
  headers?: Record<string, string>; // Cabeçalhos opcionais
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
