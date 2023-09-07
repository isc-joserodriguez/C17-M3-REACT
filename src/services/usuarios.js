import axios from 'axios';

export const obtenerUsuarios = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(process.env.REACT_APP_API_URI + '/usuarios', {
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
    } = await axios.put(
      process.env.REACT_APP_API_URI + '/usuarios/' + userId,
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
