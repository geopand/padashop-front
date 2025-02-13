import CreditCardForm from './CreditCardForm';
import ShippingAddressForm from './ShippingAddressForm'

const ShippingAddressPage = () => {
    return (<> <ShippingAddressForm address={null} />
        <CreditCardForm />
    </>);
}

export default ShippingAddressPage;