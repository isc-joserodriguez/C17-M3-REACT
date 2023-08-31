import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useContext } from 'react';
import { VentaContext } from '../context/VentaContext';
import { crearVenta } from '../services/ventas';

const ButtonsPayPal = ({ showSpinner, amount }) => {
  const { obtenerProductoObjeto } = useContext(VentaContext);
  const style = { layout: 'vertical' };
  const [{ isPending }] = usePayPalScriptReducer();

  const mapearProductos = () => {
    const productoObjeto = obtenerProductoObjeto();

    return Object.entries(productoObjeto).map(([idProducto, productos]) => ({
      producto: idProducto,
      cantidad: productos.length,
      precioUnitario: productos[0].precio,
    }));
  };

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[style]}
        fundingSource={undefined}
        createOrder={async (data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          // Petición para guardar los datos de la compra y limpiar el carrito
          console.log({data})
          return actions.order.capture().then(function () {
            crearVenta({
              productos: mapearProductos(),
              total: amount,
              orderId: data.orderId,
            });
          });
        }}
      />
    </>
  );
};

export default ButtonsPayPal;
