import axios from 'axios';

export const obtenerTodosHelados = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(process.env.REACT_APP_API_URI + '/helados');
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const crearHelado = async (heladoInfo) => {
  try {
    const {
      data: { data },
    } = await axios.post(
      process.env.REACT_APP_API_URI + '/helados',
      heladoInfo
      /* {
        headers: {
          Authorization: 'Bearer ' + token
        }
      } */
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};
