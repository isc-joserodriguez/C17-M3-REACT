import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { eliminarUsuario, obtenerUsuarios } from '../services/usuarios';

export const UserList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();
  const handleUpdate = async (userId, editData) => {
    await eliminarUsuario(userId, editData);
    const usuariosUpdated = [...usuarios].map((usuario) =>
      usuario._id === userId ? { ...usuario, ...editData } : usuario
    );
    setUsuarios(usuariosUpdated);
  };
  useEffect(() => {
    const init = async () => {
      const usuarios = await obtenerUsuarios();
      setUsuarios(usuarios);
    };
    init();
  }, []);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Button variant="success" onClick={() => navigate('/nuevo-usuario/')}>
          Crear
        </Button>
      </div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Completo</th>
            <th>Edad</th>
            <th>Tipo de Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr>
              <td>{index + 1}</td>
              <td style={{ textTransform: 'capitalize' }}>
                {usuario.nombre} {usuario.apellido}
              </td>
              <td>{usuario.edad}</td>
              <td style={{ textTransform: 'capitalize' }}>{usuario.rol}</td>
              <td>
                <Button
                  variant="primary"
                  style={{ marginRight: '7px' }}
                  onClick={() => navigate(`/info-usuario/${usuario._id}`)}
                >
                  Ver
                </Button>
                <Button
                  variant="warning"
                  style={{ marginRight: '7px' }}
                  onClick={() => navigate(`/editar-usuario/${usuario._id}`)}
                >
                  Actualizar
                </Button>

                <Button
                  variant={usuario.status ? 'danger' : 'success'}
                  onClick={() =>
                    handleUpdate(usuario._id, { status: !usuario.status })
                  }
                >
                  {usuario.status ? 'Desactivar' : 'Activar'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
