import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { HeladoContext } from '../context/HeladoContext';
import { obtenerProveedores } from '../services/proveedores';
import { obtenerUsuarios } from '../services/usuarios';
import { obtenerVentas } from '../services/ventas';
import { periodos } from '../utils';

export const Estadisticas = () => {
  // const [periodo, setPeriodo] = useState()
  //TODO: Agregar una gráfica apexcharts
  const [estadisticas, setEstadisticas] = useState({
    ventas: 0,
    usuarios: 0,
    productos: 0,
    proveedores: 0,
  });
  const { helados } = useContext(HeladoContext);

  useEffect(() => {
    const init = async () => {
      const ventas = await obtenerVentas();
      const montoVentas = ventas.reduce((acc, next) => {
        return acc + next.total;
      }, 0);
      const usuarios = await obtenerUsuarios();
      const proveedores = await obtenerProveedores();

      setEstadisticas({
        ventas: montoVentas,
        usuarios: usuarios.length,
        productos: helados.length,
        proveedores: proveedores.length,
      });
    };
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row>
        <select>
          {Object.entries(periodos).map(([value, label], index)=>(
            <option key={index} value={value}>{label}</option>
          ))}
        </select>
      <Col>${estadisticas.ventas} Total</Col>
      <Col>{estadisticas.usuarios} Usuarios totales</Col>
      <Col>{estadisticas.productos} productos</Col>
      <Col>{estadisticas.proveedores} proveedores</Col>
    </Row>
  );
};
