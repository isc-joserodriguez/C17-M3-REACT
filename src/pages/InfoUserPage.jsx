import { useParams } from 'react-router-dom';

const InfoUserPage = () => {
  const { id } = useParams();
  return <h1>InfoUserPage: {id}</h1>;
};

export default InfoUserPage;
