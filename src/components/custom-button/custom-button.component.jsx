import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ isGoogleSignIn, inverted, btnTxt, ...otherProps}) => (
    <button className={`${inverted ? 'inverted': ''} ${
        isGoogleSignIn ? 'google-sign-in': ''
        } custom-button`} 
        {...otherProps}
        > {(btnTxt)}
    </button>
);

export default CustomButton;