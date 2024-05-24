import axios, { AxiosResponse } from 'axios';

export const apiService = async <T>(
  config: ApiRequestProps,
): Promise<ApiResponse<T>> => {
  if (!config.url || typeof config.url !== 'string') {
    return { success: false, error: 'URL inválida.' };
  }

  const validMethods: string[] = ['GET', 'POST', 'PUT', 'DELETE'];
  if (!validMethods.includes(config.method)) {
    return { success: false, error: 'Método HTTP inválido.' };
  }

  try {
    const response: AxiosResponse<T> = await axios({
      url: config.url,
      method: config.method,
      params: config.params,
      data: config.data,
      headers: config.headers,
    });

    return { success: true, data: response.data };
  } catch (error) {
    let errorMessage = 'Ocorreu um erro na comunicação com a API.';
    if (axios.isAxiosError(error) && error.response) {
      errorMessage = `Erro ${error.response.status}: ${error.response.statusText}`;
    }

    return { success: false, error: errorMessage };
  }
};
