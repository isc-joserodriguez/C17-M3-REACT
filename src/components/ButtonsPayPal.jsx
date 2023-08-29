import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useState } from "react";
import { crearVenta } from "../services/ventas";

const ButtonsPayPal = ({ showSpinner, amount }) => {
  const [orderId, setOrderId]  = useState(null);
    const style = {"layout":"vertical"};
    const [{ isPending }] = usePayPalScriptReducer();

    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
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
                        setOrderId(orderId);
                        return orderId;
                      });
                  }}
          
                  onApprove={function (data, actions) {
                    // Petición para guardar los datos de la compra y limpiar el carrito
                    return actions.order.capture().then(function () {
                      crearVenta({
                        productos: [
                          {
                            producto: 'idProducto',
                            cantidad: 3,
                            precioUnitario: 20,
                          },
                        ],
                        total: 60,
                      })
                    });
                  }}
            />
        </>
    );
}

export default ButtonsPayPal;