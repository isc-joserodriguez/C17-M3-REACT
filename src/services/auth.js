import axios from 'axios';

export const login = async ({ correo, password }) => {
  try {
    const {
      data: { data },
    } = await axios.post('http://localhost:3002/v1/auth/login', {
      correo,
      password,
    });
    localStorage.setItem('token', data.token);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};
