export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'PadaShop';
export const APP_DESCRIPTION = process.env.APP_DESCRIPTION || 'The best store in the world';
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const BACK_END_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";
export const CDN_END_URL = process.env.NEXT_PUBLIC_IMAGES_CDN || "http://localhost:8080/images";


export const CREDIT_CARD_TYPES = process.env.CREDIT_CARD_TYPES ? process.env.CREDIT_CARD_TYPES.split(',')
: ['Mastercard', 'VISA', 'American Express', 'Diners'];
export const DEFAULT_CARD_TYPE = process.env.DEFAULT_CARD_TYPE || 'VISA';

export const shippingAddressDefaultValues = {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
}

export const creditCardDefaultValues = {
    owner: '',
    cardType: '',
    number: '',
    expiryMonth: 0,
    expiryYear: 0,
    cvc: 123,
}