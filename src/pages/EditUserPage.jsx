import { useParams } from 'react-router-dom';

const EditUserPage = () => {
  const { id } = useParams();
  return <h1>EditUserPage: {id}</h1>;
};

export default EditUserPage;
