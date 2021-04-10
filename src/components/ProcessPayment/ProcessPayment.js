import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// import SplitCardForm from './SplitCardForm';
import SimpleCardElement from './SimpleCardElement';

const stripePromise = loadStripe('pk_test_51IeAn5F8Tt6idX1YNJvJVrIfNjU3XrD6sHsAdImNegbHw4cdba24Ps7RmrvZ0hrI3uVrTVxzgyhI6SxkDlPcs66700yOJaMdXL');

const ProcessPayment = () => {
    return (
            <Elements stripe={stripePromise}>
                <SimpleCardElement></SimpleCardElement>
                {/* <SplitCardForm></SplitCardForm> */}
            </Elements>
    );
};

export default ProcessPayment;