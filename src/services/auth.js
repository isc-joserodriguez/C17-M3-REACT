import axios from 'axios';

export const login = async ({ correo, password }) => {
  try {
    const {
      data: { data },
    } = await axios.post(process.env.REACT_APP_API_URI + '/auth/login', {
      correo,
      password,
    });
    localStorage.setItem('token', data.token);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const register = async (registerData) => {
  try {
    console.log({ registerData });
    const {
      data: { data },
    } = await axios.post(
      process.env.REACT_APP_API_URI + '/auth/register',
      registerData
    );
    localStorage.setItem('token', data.token);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};
