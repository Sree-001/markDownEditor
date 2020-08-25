import React from 'react'
import './style.css';
import PropTypes from 'prop-types';
const Button = ({ title, keyWord, clickHandle, icon }) => {
    return ( <button
    className="action-btn"
    onClick={()=>clickHandle(keyWord)}
    title={title}
    > {title && title.includes('Heading') ? <b>{keyWord.toUpperCase() }</b> :<i className={icon}/>}
    </button>);
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    keyWord: PropTypes.string.isRequired,
    clickHandle: PropTypes.func.isRequired,
    icon: PropTypes.string
}

export default Button;