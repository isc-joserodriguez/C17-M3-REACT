import axios from 'axios';

export const obtenerTodosHelados = async () => {
  const {
    data: { data },
  } = await axios.get('http://localhost:3002/v1/helados');
  return data;
};
