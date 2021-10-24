import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...props }) => {
    return (
        <div className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...props}>
            {children}
        </div>
    );
};

export default CustomButton;