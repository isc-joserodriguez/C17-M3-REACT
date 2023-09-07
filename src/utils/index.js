import axios from 'axios';
export const periodos = {
  '1mes': 'Último mes',
  '3meses': 'Últimos 3 meses',
  '6meses': 'Últimos 6 meses',
  forever: 'Desde el inicio',
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});

//! Podemos crear middlewares
