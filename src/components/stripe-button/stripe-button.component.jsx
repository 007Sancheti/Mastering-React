import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51JLK9YSDIRuZp6HqPEpkJWyROoNAKKQd5LQxvuV7045cKFkFAu5qGc1WZZcPbCoBlXO45lVprLxR7uk4L8GtpRqs00K4qNj9W9';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };
    return (
        <StripeCheckout
            label='Pay Now'
            name='Dazzle Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`
                Your total is $${price}
            `}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;