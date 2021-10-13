import React from 'react'
import "./Button.css";
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; // making an array of fallback defaults
const SIZES = ['btn--medium', 'btn--large']; // making an array of fallback defaults

const Button = ({
    children,
    type,
    path,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; // checking if a "buttonStyle" value has been passed along, else defaulting
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; // checking if a "buttonSize" value has been passed along, else defaulting

    return (
        <Link to={path}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} >
                {children}
            </button>
        </Link>
    )
}

export default Button;