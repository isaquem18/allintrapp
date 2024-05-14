// import { useRequest } from '@contexts/Request';

// import { useCallback } from 'react';

const useCinema = () => {
  // const { request } = useRequest();

  // const listMovies = useCallback(async () => {
  //   const response = await request({
  //     method: 'GET',
  //     path: '',
  //   });

  //   return response;
  // }, [request]);

  // const getRole = useCallback(
  //   async (id?: number) => {
  //     const response = await request<CinemaListResponse>({
  //       method: 'get',
  //       url: endpoints.permissions.detail,
  //       params: {
  //         id_osc: userInfo?.id_osc,
  //         id_permissao: id,
  //       },
  //     });
  //     return response.data.body;
  //   },
  //   [request, userInfo?.id_osc]
  // );

  // const createRole = useCallback(
  //   async (newCinema: CinemaItemProps) => {
  //     const response = await request<City>({
  //       method: 'post',
  //       url: endpoints.permissions.create,
  //       data: newCinema,
  //     });

  //     return response.data;
  //   },
  //   [request]
  // );

  // const updateRole = useCallback(
  //   async (newCinema: CinemaItemProps) => {
  //     const response = await request<City>({
  //       method: 'put',
  //       url: endpoints.permissions.create,
  //       data: newCinema,
  //     });

  //     return response.data;
  //   },
  //   [request]
  // );

  return {
    // listMovies,
    // getRole,
    // createRole,
    // updateRole,
  };
};
export default useCinema;
