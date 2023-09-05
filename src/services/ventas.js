import axios from 'axios';
export const crearVenta = async (ventaInfo) => {
  try {
    const {
      data: { data },
    } = await axios.post(process.env.REACT_APP_API_URI + '/ventas', ventaInfo, {
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
    } = await axios.get(process.env.REACT_APP_API_URI + '/ventas', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};