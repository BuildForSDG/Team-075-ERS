import React from 'react';

import './custom-button.css';

const CustomButton = ({ children, ...props }) => <button {...props}>{children}</button>;

export default CustomButton;
