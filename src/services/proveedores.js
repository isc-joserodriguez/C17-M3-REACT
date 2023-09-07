import { axiosInstance } from '../utils';
export const obtenerProveedores = async () => {
  try {
    const {
      data: { data },
    } = await axiosInstance.get('/proveedores', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};
