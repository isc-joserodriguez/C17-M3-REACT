import { useState } from 'react';
import LoginPage from './pages/LoginPage';

function App() {
  const [token, setToken] = useState('');

  useState(() => {
    setToken(
      localStorage.getItem('token') ? localStorage.getItem('token') : null
    );
  }, []);

  return <>{!token && <LoginPage setToken={setToken} />}</>;
}

export default App;
