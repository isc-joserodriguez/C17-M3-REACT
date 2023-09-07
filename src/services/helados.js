import { axiosInstance } from '../utils';

export const obtenerTodosHelados = async () => {
  try {
    const {
      data: { data },
    } = await axiosInstance.get('/helados', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const crearHelado = async (heladoInfo) => {
  try {
    const {
      data: { data },
    } = await axiosInstance.post('/helados', heladoInfo, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};
