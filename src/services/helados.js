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
