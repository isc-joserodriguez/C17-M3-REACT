import { axiosInstance } from '../utils';

export const login = async ({ correo, password }) => {
  try {
    const {
      data: { data },
    } = await axiosInstance.post('/auth/login', {
      correo,
      password,
    });
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.info.rol);

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
    } = await axiosInstance.post('/auth/register', registerData);
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.info.rol);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};
