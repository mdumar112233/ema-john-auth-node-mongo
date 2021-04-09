import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51IeAn5F8Tt6idX1YNJvJVrIfNjU3XrD6sHsAdImNegbHw4cdba24Ps7RmrvZ0hrI3uVrTVxzgyhI6SxkDlPcs66700yOJaMdXL');

const ProcessPayment = () => {
    return (
            <Elements stripe={stripePromise}>
                <CardElement
                options={{
                    style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                        color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                    },
                }}
                />
            </Elements>
    );
};

export default ProcessPayment;