import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const ButtonWrapper = ({ showSpinner, amount }) => {
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
                        console.log("orderId:", orderId);
                        return orderId;
                      });
                  }}
          
                  onApprove={function (data, actions) {
                    // Petición para guardar los datos de la compra y limpiar el carrito
                    return actions.order.capture().then(function () {
                      alert('Cobrado')
                    });
                  }}
            />
        </>
    );
}

export default ButtonWrapper;