import { axiosInstance } from '../utils';

export const crearVenta = async (ventaInfo) => {
  try {
    const {
      data: { data },
    } = await axiosInstance.post('/ventas', ventaInfo, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const obtenerVentas = async () => {
  try {
    const {
      data: { data },
    } = await axiosInstance.get('/ventas', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};
