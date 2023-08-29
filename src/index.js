import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { HeladoProvider } from './context/HeladoContext';
import { VentaProvider } from './context/VentaContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <VentaProvider>
        <HeladoProvider>
          <PayPalScriptProvider
            options={{
              clientId:
                'AVNgd9dq8IfywtirKrGPBnValzxfH6X2pLkVWfH3ca7CrrIFcah7b_iTbdQ0i96UitpQET1bY2Vkiisi',
              components: 'buttons',
              currency: 'MXN',
            }}
          >
            <App />
          </PayPalScriptProvider>
        </HeladoProvider>
      </VentaProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
