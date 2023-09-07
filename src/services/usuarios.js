import { axiosInstance } from '../utils';

export const obtenerUsuarios = async () => {
  try {
    const {
      data: { data },
    } = await axiosInstance.get('/usuarios', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const eliminarUsuario = async (userId, editData) => {
  try {
    const {
      data: { data },
    } = await axiosInstance.put(
      '/usuarios/' + userId,
      {
        ...editData,
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};
